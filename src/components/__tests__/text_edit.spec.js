const React = require('react')
const gui = require('gui')
const { createTestSuite } = require('./utils')

describe('text_edit', () => {
  it('should render the component correctly', done => {
    createTestSuite(render => {
      const text = 'hello'
      const overlayScrollbar = false
      const hpolicy = 'always'
      const vpolicy = 'never'

      const ele = (
        <textedit
          defaultText={text}
          overlayScrollbar={overlayScrollbar}
          hpolicy={hpolicy}
          vpolicy={vpolicy}
        />
      )

      render(ele, container => {
        const textedit = container.childAt(0)
        expect(textedit instanceof gui.TextEdit).toBeTruthy()
        expect(textedit.getText()).toBe(text)
        done()
      })
    })
  })
})
