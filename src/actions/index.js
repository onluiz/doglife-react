let nextDogId = 0
export const addDog = dog => {
  return {
    type: 'ADD_DOG',
    id: nextDogId++,
    name: dog.name,
    breed: dog.breed,
    notes: dog.notes
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleDog = id => {
  return {
    type: 'TOGGLE_DOG',
    id
  }
}