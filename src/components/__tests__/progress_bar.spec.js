const React = require('react')
const gui = require('gui')
const { createTestSuite } = require('./utils')
const { win32 } = require('../../utils')

describe('progress_bar', () => {
  it('should render the component correctly', done => {
    createTestSuite(render => {
      const value = 50
      const indeterminate = true

      const ele = (
        <progressbar
          value={value}
          indeterminate={indeterminate}
        />
      )

      render(ele, container => {
        const progressbar = container.childAt(0)
        expect(progressbar instanceof gui.ProgressBar).toBeTruthy()
        // NOTE: The value may be not accurate in windows
        if (!win32) {
          expect(progressbar.getValue()).toBe(value)
        }
        expect(progressbar.isIndeterminate()).toBe(indeterminate)
        done()
      })
    })
  })
})
