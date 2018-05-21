const { Scroll } = require('gui')
const Base = require('./base')
const { warn } = require('./log')
const { shoudUpdate } = require('../utils')

module.exports = class Wrapper extends Base {
  constructor(props) {
    super(Scroll.create())

    this.update(null, props)
  }

  update(lastProps, props) {
    super.update(lastProps, props)

    if (shoudUpdate(props, lastProps, 'contentSize')) {
      this._ele.setContentSize(props.contentSize)
    }

    // TODO:
    if (props.hpolicy && props.vpolicy) {
      this._ele.setScrollbarPolicy(props.hpolicy, props.vpolicy)
    }

    if (shoudUpdate(props, lastProps, 'overlayScrollbar')) {
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
