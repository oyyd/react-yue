const { TextEdit } = require('gui')
const Base = require('./base')
const { shouldUpdate, win32 } = require('../utils')

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

    if (shouldUpdate(props, lastProps, 'text')) {
      this._ele.setText(props.text)
    }

    // TODO:
    if (props.hpolicy && props.vpolicy) {
      this._ele.setScrollbarPolicy(props.hpolicy, props.vpolicy)
    }

    if (!win32 && shouldUpdate(props, lastProps, 'overlayScrollbar')) {
      this._ele.setOverlayScrollbar(props.overlayScrollbar)
    }

    this.updateSignal('onTextChange', props, lastProps)
  }
}
