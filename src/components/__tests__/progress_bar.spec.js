const React = require('react')
const gui = require('gui')
const { createTestSuite } = require('./utils')

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
        expect(progressbar.getValue()).toBe(value)
        expect(progressbar.isIndeterminate()).toBe(indeterminate)
        done()
      })
    })
  })
})
