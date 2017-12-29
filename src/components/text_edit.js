import { TextEdit } from 'gui'
import Base from './base'

export default class Wrapper extends Base {
  constructor(props) {
    super(TextEdit.create())

    this.update(null, props)
  }

  update(lastProps, props) {
    this.applyStyle(props.style)

    if (props.text) {
      this._ele.setText(props.text)
    }

    this.updateSignal('onTextChange', props.onTextChange)
  }
}
