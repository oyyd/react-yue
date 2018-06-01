const childProcess = require('child_process')

// NOTE: Tests may not ends automatically in windows so we add timeout
// and stop it mannually.
function main() {
  const child = childProcess.exec('npm run jest')

  child.stderr.pipe(process.stderr)
  child.stdout.pipe(process.stdout)

  setTimeout(() => {
    child.kill()
    process.exit()
  }, 2 * 60 * 1000)

  child.on('exit', (code) => {
    process.exit(code)
  })
}

main()
