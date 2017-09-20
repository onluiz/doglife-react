import axios from 'axios';

export function addDogFail(err) {
    return {
        type: 'ADD_FAILURE',
        message: 'It was not possible to save your new dog',
        error: err
    }
}

export function addDog(newDog) {
    let url = 'http://localhost:8080/dogs';
    return function(dispatch) {
        axios.post(url, newDog)
            .then(res => dispatch(getAllDogs()))
            .catch(err => dispatch({type: 'ADD_FAILURE', error: err}))
    }
}

export function getAllDogsSucess(data) {
    console.log('getAllDogsSucess')
    return {
        type: 'SHOW_ALL_SUCCESS',
        dogs: data
    }
}

export function getAllDogsFail(err, message) {
    return {
        type: 'SHOW_ALL_FAILURE',
        message: 'It was not possible to get your dogs',
        error: err
    }
}

export function getAllDogs() {
    let url = 'http://localhost:8080/dogs';
    return function(dispatch) {
        axios.get(url)
            .then(function(res) {
                console.log('SHOW_ALL_SUCCESS', res);
                dispatch({
                    type: 'SHOW_ALL_SUCCESS',
                    dogs: res.data
                })
            })
            .catch(function(err) {
                dispatch({
                    type: 'SHOW_ALL_FAILURE',
                    error: err
                })
            })
    }
}