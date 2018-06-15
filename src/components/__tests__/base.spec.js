const React = require('react')
const gui = require('gui')
const { createTestSuite } = require('./utils')

describe('base(view)', () => {
  it('should render the view correctly', done => {
    createTestSuite(render => {
      const visible = false
      const enabled = false
      const focusable = true
      const mouseDownCanMoveWindow = true
      const font = gui.Font.create('aria', 14, 'thin', 'normal')
      const color = '#FFFFFF'
      const backgroundColor = '#000000'

      const ele = (
        <container
          visible={visible}
          enabled={enabled}
          mouseDownCanMoveWindow={mouseDownCanMoveWindow}
          focusable={focusable}
          font={font}
          style={{
            color,
            backgroundColor,
          }}
        />
      )

      render(ele, _container => {
        const container = _container.childAt(0)
        expect(container.isVisible()).toBe(visible)
        // TODO:
        // expect(container.isEnabled()).toBe(enabled)
        expect(container.isFocusable()).toBe(focusable)
        expect(container.isMouseDownCanMoveWindow()).toBe(mouseDownCanMoveWindow)
        expect(container.isFocusable()).toBe(focusable)
        done()
      })
    })
  })
})
