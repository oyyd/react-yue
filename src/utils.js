const hasNativePerformanceNow =
  // eslint-disable-next-line
  typeof performance === 'object' && typeof performance.now === 'function'

const STRICT_CHECK = true

const emptyObject = {}

const emptyFunc = () => {}

const now = hasNativePerformanceNow
  // eslint-disable-next-line
  ? () => performance.now()
  : () => Date.now()

function scheduleDeferredCallback(frameCallback) {
  return setTimeout(() => {
    frameCallback({
      timeRemaining() {
        return Infinity
      },
    })
  })
}

function warn(msg) {
  // eslint-disable-next-line
  console.warn(msg)
}

module.exports = {
  STRICT_CHECK,
  emptyFunc,
  emptyObject,
  now,
  scheduleDeferredCallback,
  warn,
}
