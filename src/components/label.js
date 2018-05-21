const { Label } = require('gui')
const Base = require('./base')
const { shoudUpdate } = require('../utils')

module.exports = class Wrapper extends Base {
  constructor(props) {
    super(Label.create(''))

    this.update(null, props)
  }

  update(lastProps, props) {
    super.update(lastProps, props)

    if (shoudUpdate(props, lastProps, 'text')) {
      this._ele.setText(props.text)
    }

    if (shoudUpdate(props, lastProps, 'align')) {
      this._ele.setAlign(props.align)
    }

    if (shoudUpdate(props, lastProps, 'vAlign')) {
      this._ele.setVAlign(props.vAlign)
    }
  }
}
