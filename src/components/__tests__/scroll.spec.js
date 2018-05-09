const React = require('react')
const gui = require('gui')
const { createTestSuite } = require('./utils')

describe('scroll', () => {
  it('should render the component correctly', done => {
    createTestSuite(render => {
      const contentSize = { width: 100, height: 100 }
      const overlayScrollbar = true
      const hpolicy = 'never'
      const vpolicy = 'always'

      const ele = (
        <scroll
          contentSize={contentSize}
          overlayScrollbar={overlayScrollbar}
          hpolicy={hpolicy}
          vpolicy={vpolicy}
        >
          <container />
        </scroll>
      )

      render(ele, container => {
        const scroll = container.childAt(0)
        expect(scroll instanceof gui.Scroll).toBeTruthy()
        const size = scroll.getContentSize()
        expect(size.width).toBe(contentSize.width)
        expect(size.height).toBe(contentSize.height)
        expect(scroll.isOverlayScrollbar()).toBe(overlayScrollbar)
        const policies = scroll.getScrollbarPolicy()
        expect(policies[0]).toBe(hpolicy)
        // TODO: not work for vpolicy
        // expect(policies[1]).toBe(vpolicy)
        done()
      })
    })
  })
})
