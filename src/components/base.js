// TODO: alert invalid style props
// TODO: error boundaries
import { emptyFunc } from '../utils'

// function getListenerIdName(name) {
//   return `__${name}SlotId`
// }

export default class Base {
  constructor(_ele) {
    this._ele = _ele
  }

  getElement() {
    return this._ele
  }

  applyStyle(style) {
    if (style && typeof style === 'object') {
      this.getElement().setStyle(style)
    }
  }

  updateSignal(name, func) {
    // TODO: Yue seems to disconnect all listeners in all instances
    // TODO: There is no way to unbind a event currently.
    if (typeof func === 'function') {
      this._ele[name] = func
    }

    // const idName = getListenerIdName(name)
    // if (typeof func === 'function') {
    //   this[idName] = this._ele[name].connect(func)
    // } else if (this[idName]) {
    //   this._ele[name].disconnect(this[idName])
    // }
  }
}

Base.prototype.addChildView = emptyFunc
Base.prototype.update = emptyFunc
Base.prototype.removeChildView = emptyFunc
Base.prototype.insertBefore = emptyFunc
