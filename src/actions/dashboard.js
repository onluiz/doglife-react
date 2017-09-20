import axios from 'axios';
const url = 'http://localhost:8080/dogs';

export function manageSnackBar(open = false, message = '') {
    console.log('open', open, 'message', message)
    return { type: 'MANAGE_SNACK_BAR', snackBar: { open, message }}
}

export function manageAddDogDialog(open) {
    return { type: 'MANAGE_ADD_DOG_DIALOG', addDogDialog: { open }}
}

export function addDog(newDog) {
    return function(dispatch) {
        axios.post(url, newDog)
            .then(res => {
                dispatch(manageAddDogDialog(false))
                dispatch(manageSnackBar(true, 'Dog successfully added'))
                dispatch(getAllDogs())
            })
            .catch(err => {
                dispatch(manageSnackBar(true, 'It was not possible to save your new dog =/'))
            })
    }
}

export function getAllDogs() {
    return function(dispatch) {
        axios.get(url)
            .then(res => dispatch({type: 'SHOW_ALL_SUCCESS', dogs: res.data}))
            .catch(err => dispatch(manageSnackBar(true, 'It was not possible to get your dogs =/')))
    }
}