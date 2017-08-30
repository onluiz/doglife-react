const dogs = (state = [], action) => {
    switch (action.type) {
        case 'ADD_DOG':
            return [
            ...state,
                {
                    id: action.id,
                    name: action.name
                }
            ]
        case 'TOGGLE_DOG':
            return state.map(todo =>
                (todo.id === action.id) 
                ? {...todo, completed: !todo.completed}
                : todo
            )
        default:
            return state;
    }
};

export default dogs;