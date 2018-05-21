const { ProgressBar } = require('gui')
const Base = require('./base')
const { shoudUpdate } = require('../utils')

module.exports = class Wrapper extends Base {
  constructor(props) {
    super(ProgressBar.create())

    this.update(null, props)
  }

  update(lastProps, props) {
    super.update(lastProps, props)

    if (shoudUpdate(props, lastProps, 'value')) {
      this._ele.setValue(props.value)
    }

    if (shoudUpdate(props, lastProps, 'indeterminate')) {
      this._ele.setIndeterminate(props.indeterminate)
    }

    this.updateSignal('onClick', props, lastProps)
  }
}
