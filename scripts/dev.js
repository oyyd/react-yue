const chokidar = require('chokidar')
const path = require('path')
const childProcess = require('child_process')

let child = null

function restart() {
  if (child) {
    child.kill()
  }

  child = childProcess.fork(path.resolve(__dirname, '../lib/do_space/index.js'), {
    stdio: 'inherit',
  })
}

function main() {
  const watcher = chokidar.watch(path.resolve(__dirname, '../lib/do_space'))

  watcher.on('change', () => {
    restart()
  })

  restart()
}

if (module === require.main) {
  main()
}
