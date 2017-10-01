/*
introduces the lifecycle method componentDidCatch
catch errors from anywhere within a components child tree
if you don't do this then the entire component tree will be unmounted because it
has been decided this is a better approach than rendering corrupted ui.

catches any error in a function component or within the render function of a class
component.
Any error thrown within the constructor will render fallback ui
Any lifecycle method thrown in error will be caught.
Errors thrown within event handlers are not caught unless it is thrown inside
setState/
*/

class myErrorBoundary extends Component {

  constructor(props) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error, info) {
    this.setState(state => ({...state, hasError: true}))
    //send to error reporting
  }

  render() {
    if(this.state.hasError) {
      return (
        //ui
      )
    } else {
      return this.props.children
    }
  }
}
