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

    if (props.font && props.font !== lastProps.font) {
      this.getElement().setFont(props.font)
    }

    if (props.color && props.color !== lastProps.color) {
      this.getElement().setColor(props.color)
    }

    if (
      props.backgroundColor &&
      props.backgroundColor !== lastProps.backgroundColor
    ) {
      this.getElement().setBackgroundColor(props.backgroundColor)
    }

    this.updateSignal('onMouseDown', props.onMouseDown, lastProps.onMouseDown)
    this.updateSignal('onMouseUp', props.onMouseUp, lastProps.onMouseUp)
    this.updateSignal('onMouseMove', props.onMouseMove, lastProps.onMouseMove)
    this.updateSignal(
      'onMouseEnter',
      props.onMouseEnter,
      lastProps.onMouseEnter
    )
    this.updateSignal(
      'onMouseLeave',
      props.onMouseLeave,
      lastProps.onMouseLeave
    )
    this.updateSignal('onKeyDown', props.onKeyDown, lastProps.onKeyDown)
    this.updateSignal('onKeyUp', props.onKeyUp, lastProps.onKeyUp)
    this.updateSignal(
      'onSizeChanged',
      props.onSizeChanged,
      lastProps.onSizeChanged
    )
    this.updateSignal(
      'onCaptureLost',
      props.onCaptureLost,
      lastProps.onCaptureLost
    )
  }

  updateSignal(name, func, lastFunc) {
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
