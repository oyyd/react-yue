// TODO: alert invalid style props
// TODO: error boundaries
import { emptyFunc } from '../utils'

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
}

Base.prototype.addChildView = emptyFunc
Base.prototype.update = emptyFunc
Base.prototype.removeChildView = emptyFunc
Base.prototype.insertBefore = emptyFunc
