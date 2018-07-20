const { View, Group } = require('gui')
const Base = require('./base')
const { STRICT_CHECK, warn } = require('../utils')
const { shouldUpdate } = require('../utils')

module.exports = class Wrapper extends Base {
  constructor(props) {
    super(Group.create(''))

    this.update(null, props)
  }

  update(lastProps, props) {
    super.update(lastProps, props)

    if (shouldUpdate(props, lastProps, 'title')) {
      this._ele.setTitle(props.title)
    }
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
