const gui = require('gui')

function promiseReslve() {
  const p = new Promise((resolve) => {
    resolve('true')
  })

  p.then((res) => {
    console.log(res)
  })
}

promiseReslve()
// gui.MessageLoop.run()
