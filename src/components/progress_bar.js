import { ProgressBar } from 'gui'
import Base from './base'

export default class Wrapper extends Base {
  constructor(props) {
    super(ProgressBar.create())

    this.update(null, props)
  }

  update(lastProps, props) {
    this.applyStyle(props.style)

    if (props.value) {
      this._ele.setValue(props.value)
    }

    if (props.indeterminate) {
      this._ele.setIndeterminate(props.indeterminate)
    }

    this.updateSignal('onClick', props.onClick)
  }
}
