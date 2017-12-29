import { Vibrant } from 'gui'
import Container from './container'

export default class Wrapper extends Container {
  constructor(props) {
    super(props, Vibrant.create())

    this.update(null, props)
  }

  // TODO: use "lastProps" to avoid unnecessary updating
  update(lastProps, props) {
    super.update(lastProps, props)

    if (props.material) {
      this._ele.setMaterial(props.material)
    }

    if (props.blendingMode) {
      this._ele.setBlendingMode(props.blendingMode)
    }
  }
}
