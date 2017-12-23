const hasNativePerformanceNow =
  // eslint-disable-next-line
  typeof performance === 'object' && typeof performance.now === 'function'

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
