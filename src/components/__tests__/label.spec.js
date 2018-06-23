const React = require('react')
const gui = require('gui')
const { createTestSuite } = require('./utils')

describe('label', () => {
  it('should render the component correctly', done => {
    createTestSuite(render => {
      const text = 'hello'
      const align = 'left'
      const vAlign = 'middle'

      const ele = (
        <label
          text={text}
          style={{
            textAlign: align,
            verticalAlign: vAlign,
          }}
        />
      )

      render(ele, container => {
        const label = container.childAt(0)
        expect(label instanceof gui.Label).toBeTruthy()
        expect(label.getText()).toBe(text)
        done()
      })
    })
  })
})
