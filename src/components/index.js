const button = require('./button')
const container = require('./container')
const entry = require('./entry')
const group = require('./group')
const progressbar = require('./progress_bar')
const scroll = require('./scroll')
const label = require('./label')
const textedit = require('./text_edit')
const vibrant = require('./vibrant')

const Components = {
  button,
  container,
  entry,
  group,
  progressbar,
  scroll,
  label,
  textedit,
  vibrant,
}

function hasComponent(type) {
  return Object.hasOwnProperty.call(Components, type)
}

module.exports = {
  hasComponent,
  Components,
}
