const { Button } = require('gui')
const Base = require('./base')
const { shouldUpdate } = require('../utils')

// TODO: add button style and border
module.exports = class Wrapper extends Base {
  constructor(props) {
    super(Button.create({
      title: '',
      type: props.type || 'normal',
    }))

    if (props.defaultChecked) {
      this._ele.setChecked(props.defaultChecked)
    }

    this.update(null, props)
  }

  update(lastProps, props) {
    super.update(lastProps, props)

    if (shouldUpdate(props, lastProps, 'title')) {
      this._ele.setTitle(props.title)
    }

    if (shouldUpdate(props, lastProps, 'image')) {
      this._ele.setImage(props.image)
    }

    this.updateSignal('onClick', props, lastProps)
  }
}
