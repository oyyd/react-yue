const { Container } = require('gui')
const Base = require('./base')

module.exports = class Wrapper extends Base {
  constructor(props, ele) {
    super(ele || Container.create())

    this.update(null, props)
  }

  // TODO: use "lastProps" to avoid unnecessary updating
  update(lastProps, props) {
    super.update(lastProps, props)

    this.updateSignal('onDraw', props, lastProps)
  }

  addChildView(child) {
    this._ele.addChildView(child._ele)
  }

  removeChildView(child) {
    this._ele.removeChildView(child._ele)
  }

  insertBefore(child, beforeChild) {
    const count = this._ele.childCount()
    const targetEle = beforeChild._ele

    for (let i = 0; i < count; i += 1) {
      const ele = this._ele.childAt(i)

      if (targetEle === ele) {
        this._ele.addChildViewAt(child._ele, i)
        return
      }
    }

    this._ele.addChildView(child._ele)
  }
}
