const { Button } = require('gui')
const Base = require('./base')
const { shoudUpdate } = require('../utils')

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

    if (shoudUpdate(props, lastProps, 'title')) {
      this._ele.setTitle(props.title)
    }

    if (shoudUpdate(props, lastProps, 'image')) {
      this._ele.setImage(props.image)
    }

    this.updateSignal('onClick', props, lastProps)
  }
}
