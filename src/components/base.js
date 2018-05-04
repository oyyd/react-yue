// TODO: alert invalid style props
// TODO: error boundaries
const { emptyFunc } = require('../utils')

function getListenerIdName(name) {
  return `__${name}SlotId`
}

class Base {
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

    if (typeof func === 'function' && !this[idName]) {
      this[idName] = this._ele[name].connect(func)
    }

    if (typeof func !== 'function' && this[idName]) {
      this._ele[name].disconnect(this[idName])
    }
  }
}

Base.prototype.addChildView = emptyFunc
Base.prototype.update = emptyFunc
Base.prototype.removeChildView = emptyFunc
Base.prototype.insertBefore = emptyFunc

module.exports = Base
