import { Button } from 'gui'
import Base from './base'

export default class Wrapper extends Base {
  constructor(props) {
    super(Button.create({
      title: '',
      type: props.type || 'normal',
    }))

    this.update(null, props)
  }

  update(lastProps, props) {
    this.applyStyle(props.style)

    if (props.title) {
      this._ele.setTitle(props.title)
    }

    this.updateSignal('onClick', props.onClick)
  }
}
