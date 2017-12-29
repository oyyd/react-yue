import { View, Group } from 'gui'
import Base from './base'
import { STRICT_CHECK, warn } from '../utils'

export default class Wrapper extends Base {
  constructor(props) {
    super(Group.create(''))

    this.update(null, props)
  }

  update(lastProps, props) {
    if (props.title) {
      this._ele.setTitle(props.title)
    }

    // style
    this.applyStyle(props.style)
  }

  addChildView(child) {
    // TODO: Is there any way to know the group has more than one child?
    // if (STRICT_CHECK) {
    //   const content = this._ele.getContentView()
    //   if (content instanceof View) {
    //     warn('groups can have only one child')
    //   }
    // }

    // TODO: warn when there is more than one child
    this._ele.setContentView(child._ele)
  }
}
