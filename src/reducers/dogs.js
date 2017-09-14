const dogs = (state = [], action) => {
    switch (action.type) {
      case 'SHOW_ALL':
        return {
            ...state,
            dogs: action.dogs
          }
      default:
        return state
    }
  }
  
  export default dogs