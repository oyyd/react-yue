const { TextEdit } = require('gui')
const Base = require('./base')
const { shoudUpdate } = require('../utils')

module.exports = class Wrapper extends Base {
  constructor(props) {
    super(TextEdit.create())

    if (props.defaultText) {
      this._ele.setText(props.defaultText)
    }

    this.update(null, props)
  }

  update(lastProps, props) {
    super.update(lastProps, props)

    if (shoudUpdate(props, lastProps, 'text')) {
      this._ele.setText(props.text)
    }

    // TODO:
    if (props.hpolicy && props.vpolicy) {
      this._ele.setScrollbarPolicy(props.hpolicy, props.vpolicy)
    }

    if (shoudUpdate(props, lastProps, 'overlayScrollbar')) {
      this._ele.setOverlayScrollbar(props.overlayScrollbar)
    }

    this.updateSignal('onTextChange', props, lastProps)
  }
}
