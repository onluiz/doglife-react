const todos = (state = [], action) => {
    switch (action.type) {
      case 'SHOW_ALL':
        return {
            ...state,
            dogs: action.dogs
          }
      case 'TOGGLE_TODO':
        return state.map(todo =>
          (todo.id === action.id) 
            ? {...todo, completed: !todo.completed}
            : todo
        )
      default:
        return state
    }
  }
  
  export default todos