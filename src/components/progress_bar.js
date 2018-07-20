const { ProgressBar } = require('gui')
const Base = require('./base')
const { shouldUpdate } = require('../utils')

module.exports = class Wrapper extends Base {
  constructor(props) {
    super(ProgressBar.create())

    this.update(null, props)
  }

  update(lastProps, props) {
    super.update(lastProps, props)

    if (shouldUpdate(props, lastProps, 'value')) {
      this._ele.setValue(props.value)
    }

    if (shouldUpdate(props, lastProps, 'indeterminate')) {
      this._ele.setIndeterminate(props.indeterminate)
    }

    this.updateSignal('onClick', props, lastProps)
  }
}
