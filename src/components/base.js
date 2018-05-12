// TODO: alert invalid style props
// TODO: error boundaries
const { emptyFunc } = require('../utils')

function getListenerIdName(name) {
  return `__${name}SlotId`
}

class Base {
  constructor(_ele) {
    this._ele = _ele
  }

  getElement() {
    return this._ele
  }

  applyStyle(style) {
    if (style && typeof style === 'object') {
      this.getElement().setStyle(style)
    }
  }

  update(lastProps, props) {
    this.applyStyle(props.style)

    // TODO: should add `setCapture` and `hasFocus`?

    if (typeof props.visible === 'boolean') {
      this.getElement().setVisible(props.visible)
    }

    if (typeof props.enabled === 'boolean') {
      this.getElement().setEnabled(props.enabled)
    }

    if (typeof props.focusable === 'boolean') {
      this.getElement().setFocusable(props.focusable)
    }

    if (typeof props.mouseDownCanMoveWindow === 'boolean') {
      this.getElement().setMouseDownCanMoveWindow(props.mouseDownCanMoveWindow)
    }

    if (props.font) {
      this.getElement().setFont(props.font)
    }

    if (props.color) {
      this.getElement().setColor(props.color)
    }

    if (props.backgroundColor) {
      this.getElement().setBackgroundColor(props.backgroundColor)
    }

    this.updateSignal('onMouseDown', props.onMouseDown)
    this.updateSignal('onMouseUp', props.onMouseUp)
    this.updateSignal('onMouseMove', props.onMouseMove)
    this.updateSignal('onMouseEnter', props.onMouseEnter)
    this.updateSignal('onMouseLeave', props.onMouseLeave)
    this.updateSignal('onKeyDown', props.onKeyDown)
    this.updateSignal('onKeyUp', props.onKeyUp)
    this.updateSignal('onSizeChanged', props.onSizeChanged)
    this.updateSignal('onCaptureLost', props.onCaptureLost)
  }

  updateSignal(name, func) {
    const idName = getListenerIdName(name)

    if (typeof func === 'function' && !this[idName]) {
      this[idName] = this._ele[name].connect(func)
    }

    if (typeof func !== 'function' && this[idName]) {
      this._ele[name].disconnect(this[idName])
    }
  }
}

Base.prototype.addChildView = emptyFunc
Base.prototype.removeChildView = emptyFunc
Base.prototype.insertBefore = emptyFunc

module.exports = Base
