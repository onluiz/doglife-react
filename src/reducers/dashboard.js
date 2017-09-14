const dashboard = (state = {dogs: []}, action) => {
    switch (action.type) {
      case 'SHOW_ALL_SUCCESS':
        return {
            ...state,
            dogs: action.dogs
          }
      case 'SHOW_ALL_FAILURE':
        return {
          ...state,
          err: action.err
        }
      case 'ADD_FAILURE' : {
        return {
          ...state,
          err: action.err
        }
      }
      default:
        return state
    }
  }
  
  export default dashboard