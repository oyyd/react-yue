const { Scroll } = require('gui')
const Base = require('./base')
const { warn } = require('./log')

module.exports = class Wrapper extends Base {
  constructor(props) {
    super(Scroll.create())

    this.update(null, props)
  }

  update(lastProps, props) {
    super.update(lastProps, props)

    if (props.contentSize) {
      this._ele.setContentSize(props.contentSize)
    }

    if (props.hpolicy && props.vpolicy) {
      this._ele.setScrollbarPolicy(props.hpolicy, props.vpolicy)
    }

    if (props.overlayScrollbar) {
      this._ele.setOverlayScrollbar(props.overlayScrollbar)
    }
  }

  addChildView(child) {
    this._ele.setContentView(child._ele)
  }

  // eslint-disable-next-line
  insertBefore() {
    warn('insertBefore of scroll in a non-op')
  }
}
