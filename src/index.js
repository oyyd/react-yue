// TODO: have to force "production" env or the react-reconciler will
// swallow errors in non-browser environments

const { render } = require('./renderer')

module.exports = {
  render,
}
