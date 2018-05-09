const { TextEdit } = require('gui')
const Base = require('./base')

module.exports = class Wrapper extends Base {
  constructor(props) {
    super(TextEdit.create())

    if (props.defaultText) {
      this._ele.setText(props.defaultText)
    }

    this.update(null, props)
  }

  update(lastProps, props) {
    this.applyStyle(props.style)

    if (props.text) {
      this._ele.setText(props.text)
    }

    if (props.hpolicy && props.vpolicy) {
      this._ele.setScrollbarPolicy(props.hpolicy, props.vpolicy)
    }

    if (props.overlayScrollbar) {
      this._ele.setOverlayScrollbar(props.overlayScrollbar)
    }

    this.updateSignal('onTextChange', props.onTextChange)
  }
}
