const dogs = (state = [], action) => {
    switch (action.type) {
        case 'ADD_DOG':
            return [
            ...state,
                {
                    id: action.id,
                    name: action.name,
                    breed: action.breed,
                    notes: action.notes
                }
            ]
        case 'TOGGLE_DOG':
            return state.map(dog =>
                (dog.id === action.id) 
                ? {...dog, completed: !dog.completed}
                : dog
            )
        default:
            return state;
    }
};

export default dogs;