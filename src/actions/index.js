let nextDogId = 0
export const addDog = name => {
  return {
    type: 'ADD_DOG',
    id: nextDogId++,
    name
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