import axios from 'axios';
const url = 'http://localhost:8080/dogs';

export function manageSnackBar(open = false, message = '') {
    return { type: 'MANAGE_SNACK_BAR', snackBar: { open, message }}
}

export function manageAddDogDialog(open = false, dog = {}) {
    return { type: 'MANAGE_ADD_DOG_DIALOG', addDogDialog: { open, dog }}
}

export function editDog(id) {
    return function(dispatch) {
        axios.get(`${url}/${id}`)
        .then(res => dispatch(manageAddDogDialog(true, res.data)))
        .catch(err => dispatch(manageSnackBar(true, 'It was not possible to get your dog =/')))
    }
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