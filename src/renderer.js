const Reconciler = require('react-reconciler')
const { Components, hasComponent } = require('./components')
const { emptyObject, now, scheduleDeferredCallback } = require('./utils')

function appendInitialChild(parentInstance, child) {
  // TODO: views that do not support addChildView
  parentInstance.addChildView(child)
}

function createInstance(type, props, internalInstanceHandle) {
  if (!hasComponent(type)) {
    throw new Error(`receive invalid type: ${type}`)
  }

  // console.error('internalInstanceHandle', internalInstanceHandle)

  const Comp = Components[type]

  return new Comp(props)
}

// eslint-disable-next-line
function finalizeInitialChildren(docElement, type, props) {
  // console.log('finalizeInitialChildren')
  return false
}

function getPublicInstance(...args) {
  console.log('getPublicInstance')
}

function prepareForCommit() {
  // console.log('getPublicInstance')
}

function prepareUpdate() {
  // always update
  return true
}

function resetAfterCommit() {}

function getRootHostContext() {
  return emptyObject
}

function getChildHostContext() {
  return emptyObject
}

// TODO: utilize the text content
function shouldSetTextContent() {
  return false
}

function resetTextContent() {}

function createTextInstance() {
  return null
}

// eslint-disable-next-line
function shouldDeprioritizeSubtree(type, props) {
  return false
}

// Mutation
function appendChild(parentInstance, child) {
  if (typeof parentInstance.addChildView !== 'function') {
    throw new Error('expect the instance to be an gui container')
  }

  parentInstance.addChildView(child)
}

function appendChildToContainer(parentInstance, child) {
  if (typeof parentInstance.addChildView !== 'function') {
    throw new Error('expect the instance to be an gui container')
  }

  parentInstance.addChildView(child.getElement())
}

function removeChild(parentInstance, child) {
  parentInstance.removeChildView(child)
}

function removeChildFromContainer(parentInstance, child) {
  parentInstance.removeChildView(child)
}

function insertBefore(parentInstance, child, beforeChild) {
  parentInstance.insertBefore(child, beforeChild)
}

// TODO: what's the "updatePayload"?
function commitUpdate(instance, updatePayload, type, oldProps, newProps) {
  // console.log('instance, updatePayload', instance, updatePayload, type, oldProps, newProps)
  instance.update(oldProps, newProps)
}

function commitMount(instance, updatePayload, type, oldProps, newProps) {
  console.log('commitMount')
}

function commitTextUpdate(textInstance, oldText, newText) {
  console.log('commitTextUpdate')
}

export const YueRenderer = Reconciler({
  appendInitialChild,

  createInstance,

  createTextInstance,

  finalizeInitialChildren,

  getPublicInstance,

  prepareForCommit,

  prepareUpdate,

  resetAfterCommit,

  resetTextContent,

  getRootHostContext,

  getChildHostContext,

  shouldSetTextContent,

  scheduleDeferredCallback,

  shouldDeprioritizeSubtree,

  now,

  mutation: {
    appendChild,
    appendChildToContainer,
    removeChild,
    removeChildFromContainer,
    insertBefore,
    commitUpdate,
    commitMount,
    commitTextUpdate,
  },
})

function render(element, guiContainer, callback) {
  let root = guiContainer._reactRootContainer

  if (!root) {
    // Remove all children of the guiContainer
    const childCount = guiContainer.childCount()

    for (let i = 0; i < childCount; i += 1) {
      guiContainer.removeChildView(guiContainer.childAt(0))
    }

    const newRoot = YueRenderer.createContainer(guiContainer)
    // eslint-disable-next-line
    root = guiContainer._reactRootContainer = newRoot
  }

  return YueRenderer.updateContainer(element, root, null, callback)
}

module.exports = {
  render,
}
