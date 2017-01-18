//mapStateToProps
//takes the applications state as an argument

function mapStateToProps(state){
//whatever gets returned from here is what will show up in the props in that component
//usually you return an object.
  return {
    asdf: state.numbers 
  }
}

//if the state ever changes the component will instantly re render with the new list.

//connect function is what says take the map state to props and the component and return the container.

export default connect(mapStateToProps)(BookList);
