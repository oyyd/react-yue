// TODO: alert invalid style props
// TODO: error boundaries
import { emptyFunc } from '../utils'

function getListenerIdName(name) {
  return `__${name}SlotId`
}

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
    const idName = getListenerIdName(name)
    if (typeof func === 'function') {
      this[idName] = this._ele[name].connect(func)
      console.log('this[idName]', this, name, idName, this[idName])
      console.log('bind', this[idName])
    } else if (this[idName]) {
      // TODO: Yue seems to disconnect all listeners in all instances
      console.log('unbind', this[idName], this)
      this._ele[name].disconnect(this[idName])
    }
  }
}

Base.prototype.addChildView = emptyFunc
Base.prototype.update = emptyFunc
Base.prototype.removeChildView = emptyFunc
Base.prototype.insertBefore = emptyFunc
