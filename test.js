const childProcess = require('child_process')

// NOTE: Tests may not ends automatically in windows so we add timeout
// and stop it mannually.
function main() {
  const child = childProcess.exec('npm run test')

  child.stderr.pipe(process.stderr)
  child.stdout.pipe(process.stdout)

  let errorInfo = false

  child.stderr.on('data', () => {
    errorInfo = true
  })

  setTimeout(() => {
    child.kill()
    process.exit(errorInfo ? 1 : 0)
  }, 30 * 1000)

  child.on('exit', () => {
    process.exit(errorInfo ? 1 : 0)
  })
}

main()
