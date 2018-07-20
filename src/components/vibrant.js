const { Vibrant } = require('gui')
const Container = require('./container')
const { shouldUpdate } = require('../utils')

module.exports = class Wrapper extends Container {
  constructor(props) {
    super(props, Vibrant.create())

    this.update(null, props)
  }

  // TODO: use "lastProps" to avoid unnecessary updating
  update(lastProps, props) {
    super.update(lastProps, props)

    if (shouldUpdate(props, lastProps, 'material')) {
      this._ele.setMaterial(props.material)
    }

    if (shouldUpdate(props, lastProps, 'blendingMode')) {
      this._ele.setBlendingMode(props.blendingMode)
    }
  }
}
