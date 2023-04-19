import {Compenent} from 'react'

class Welcome extends Compenent {
  render() {
    const {name} = this.props
    return <h1>Hello, {name}!</h1>
  }
}
export default Welcome
