const { Vibrant } = require('gui')
const Container = require('./container')
const { shoudUpdate } = require('../utils')

module.exports = class Wrapper extends Container {
  constructor(props) {
    super(props, Vibrant.create())

    this.update(null, props)
  }

  // TODO: use "lastProps" to avoid unnecessary updating
  update(lastProps, props) {
    super.update(lastProps, props)

    if (shoudUpdate(props, lastProps, 'material')) {
      this._ele.setMaterial(props.material)
    }

    if (shoudUpdate(props, lastProps, 'blendingMode')) {
      this._ele.setBlendingMode(props.blendingMode)
    }
  }
}
