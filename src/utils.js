const hasNativePerformanceNow =
  // eslint-disable-next-line
  typeof performance === 'object' && typeof performance.now === 'function'

export const STRICT_CHECK = true

export const emptyObject = {}

export const emptyFunc = () => {}

export const now = hasNativePerformanceNow
  // eslint-disable-next-line
  ? () => performance.now()
  : () => Date.now()

export function scheduleDeferredCallback(frameCallback) {
  return setTimeout(() => {
    frameCallback({
      timeRemaining() {
        return Infinity
      },
    })
  })
}

export function warn(msg) {
  // eslint-disable-next-line
  console.warn(msg)
}
