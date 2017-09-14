import axios from 'axios';

export function addDogSucess() {

}

export function addDogFail() {

}

export function addDog() {
    
}

export function getAllDogsSucess(data) {
    return {
        type: 'SHOW_ALL_SUCCESS',
        dogs: data
    }
}

export function getAllDogsFail(err) {
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