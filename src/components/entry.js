const { Entry } = require('gui')
const Base = require('./base')

// const TYPES = {
//   normal: 'normal',
//   password: 'password',
// }

module.exports = class Wrapper extends Base {
  constructor(props) {
    const { type } = props
    const element = type ? Entry.createType(type) : Entry.create()

    super(element)

    this.update(null, props)
  }

  update(lastProps, props) {
    super.update(lastProps, props)

    if (props.defaultText) {
      this._ele.setText(props.defaultText)
    }

    // event
    this.updateSignal('onTextChange', props, lastProps)
    this.updateSignal('onActivate', props, lastProps)
  }
}
