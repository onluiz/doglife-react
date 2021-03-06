import axios from 'axios';
import * as util from '../utils/util'
const url = 'http://localhost:8080/dogs'

export function manageSnackBar(open = false, message = '') {
    return { type: 'MANAGE_SNACK_BAR', snackBar: { open, message }}
}

export function manageAddDogDialog(open = false, dog = { _id: '', name: '', nickname: '', birthdate: '', notes: '' }) {
    return { type: 'MANAGE_ADD_DOG_DIALOG', addDogDialog: { open, dog }}
}

export function editDog(id) {
    return function(dispatch) {
        axios.get(`${url}/${id}`)
        .then(res => {
            dispatch(manageAddDogDialog(true, extractDog(res.data)))
        })
        .catch(err => dispatch(manageSnackBar(true, 'It was not possible to get your dog =/')))
    }
}

export function addDog(newDog) {
    return function(dispatch) {
        axios.post(url, extractNewDog(newDog))
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

export function updateDog(dog) {
    return function(dispatch) {
        axios.put(`${url}/${dog._id}`, dog)
            .then(res => {
                dispatch(manageAddDogDialog(false))
                dispatch(manageSnackBar(true, 'Dog successfully edited'))
                dispatch(getAllDogs())
            })
            .catch(err => {
                dispatch(manageSnackBar(true, 'It was not possible to edit your dog =/'))
            })
    }
}

export function deleteDog(id) {
    return function(dispatch) {
        axios.delete(`${url}/${id}`)
            .then(res => {
                dispatch(manageSnackBar(true, 'Dog successfully removed =('))
                dispatch(getAllDogs())
            })
            .catch(err => {
                dispatch(manageSnackBar(true, 'It was not possible to edit your dog =/'))
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

function extractNewDog(obj) {
    return {
        name: util.checkValue(obj.name),
        nickname: util.checkValue(obj.nickname),
        birthdate: util.checkDateValue(obj.birthdate),
        notes: util.checkValue(obj.notes),
    }
}

function extractDog(obj) {
    return {
        _id: util.checkValue(obj._id),
        name: util.checkValue(obj.name),
        nickname: util.checkValue(obj.nickname),
        birthdate: util.checkDateValue(obj.birthdate),
        notes: util.checkValue(obj.notes),
    }
}