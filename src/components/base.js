// TODO: alert invalid style props
// TODO: error boundaries
const { emptyFunc } = require('../utils')
const applyStyles = require('../apply_styles')

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
      applyStyles(this.getElement(), style)
    }
  }

  update(lastProps, props) {
    if (!lastProps) {
      lastProps = {}
    }

    this.applyStyle(props.style)

    // TODO: should add `setCapture` and `hasFocus`?
    if (
      typeof props.visible === 'boolean' &&
      props.visible !== lastProps.visible
    ) {
      this.getElement().setVisible(props.visible)
    }

    if (
      typeof props.enabled === 'boolean' &&
      props.enabled !== lastProps.enabled
    ) {
      this.getElement().setEnabled(props.enabled)
    }

    if (
      typeof props.focusable === 'boolean' &&
      props.focusable !== lastProps.focusable
    ) {
      this.getElement().setFocusable(props.focusable)
    }

    if (
      typeof props.mouseDownCanMoveWindow === 'boolean' &&
      props.mouseDownCanMoveWindow !== lastProps.mouseDownCanMoveWindow
    ) {
      this.getElement().setMouseDownCanMoveWindow(props.mouseDownCanMoveWindow)
    }

    this.updateSignal('onMouseDown', props, lastProps)
    this.updateSignal('onMouseUp', props, lastProps)
    this.updateSignal('onMouseMove', props, lastProps)
    this.updateSignal('onMouseEnter', props, lastProps)
    this.updateSignal('onMouseLeave', props, lastProps)
    this.updateSignal('onKeyDown', props, lastProps)
    this.updateSignal('onKeyUp', props, lastProps)
    this.updateSignal('onSizeChanged', props, lastProps)
    this.updateSignal('onCaptureLost', props, lastProps)
  }

  updateSignal(name, props, lastProps) {
    if (!lastProps) {
      lastProps = {}
    }

    const func = props[name]
    const lastFunc = lastProps[name]

    if (func === lastFunc) {
      return
    }

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
Base.prototype.removeChildView = emptyFunc
Base.prototype.insertBefore = emptyFunc

module.exports = Base
