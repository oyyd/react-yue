const { Label } = require('gui')
const Base = require('./base')

module.exports = class Wrapper extends Base {
  constructor(props) {
    super(Label.create(''))

    this.update(null, props)
  }

  update(lastProps, props) {
    super.update(lastProps, props)

    if (props.text) {
      this._ele.setText(props.text)
    }
  }
}
