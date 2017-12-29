import { Scroll } from 'gui'
import Base from './base'

export default class Wrapper extends Base {
  constructor(props) {
    super(Scroll.create())

    this.update(null, props)
  }

  update(lastProps, props) {
    this.applyStyle(props.style)

    if (props.contentSize) {
      this._ele.setContentSize(props.contentSize)
    }

    if (props.scrollbarPolicy) {
      this._ele.setIndeterminate(props.scrollbarPolicy)
    }
  }

  addChildView(child) {
    // TODO: support only one child
    this._ele.setContentView(child._ele)
  }

  // TODO: Yue should support remove content view.
}
