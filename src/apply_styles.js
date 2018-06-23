const gui = require('gui')
const parseColor = require('parse-color')

const FONT_WEIGHTS = {
  '100': 'thin',
  '200': 'extra-light',
  '300': 'light',
  '400': 'normal',
  '500': 'medium',
  '600': 'semi-bold',
  '700': 'bold',
  '800': 'extra-bold',
  '900': 'black',
}

const ALIGN_MAPPING = {
  left: 'start',
  center: 'center',
  right: 'end'
}

const VALIGN_MAPPING = {
  top: 'start',
  middle: 'center',
  bottom: 'end'
}

function resolveColor (color) {
  let parsed = parseColor(color)
  if (parsed.rgba) {
    let argb = parsed.rgba.slice()
    argb.unshift(Math.round(argb.pop() * 255))
    return gui.Color.argb(...argb)
  }
}

function applyTextStyles (view, styles) {
  let { fontWeight, fontFamily, fontSize, fontStyle } = styles
  fontWeight = fontWeight || ''
  fontWeight = FONT_WEIGHTS[fontWeight.toString()] || fontWeight

  let defaultSystemFont = gui.Font.default()
  let fontParams = [
    fontFamily || defaultSystemFont.getName(),
    fontSize || defaultSystemFont.getSize(),
    fontWeight || defaultSystemFont.getWeight(),
    fontStyle || defaultSystemFont.getStyle(),
  ]
  view.setFont(gui.Font.create(...fontParams))
  // fixes bug where gui.Label height doesn't grow with
  // the font size
  view.setStyle({ height: fontParams[1] })

  if (styles.textAlign) {
    view.setAlign(ALIGN_MAPPING[styles.textAlign])
  }

  if (styles.verticalAlign) {
    view.setVAlign(VALIGN_MAPPING[styles.verticalAlign])
  }
}

module.exports = function applyStyles (view, styles = {}) {
  view.setStyle(styles)
  
  if (view instanceof gui.Label || view instanceof gui.Entry) {
    applyTextStyles(view, styles)
  }

  if (styles.backgroundColor) {
    view.setBackgroundColor(resolveColor(styles.backgroundColor))
  }

  let color = styles.color || 'black'
  if (color) {
    view.setColor(resolveColor(color))
  }
}
