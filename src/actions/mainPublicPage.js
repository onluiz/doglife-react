import axios from 'axios';
import * as util from '../utils/util'
import {reset} from 'redux-form';
const url = 'http://localhost:8080/';

export function manageSnackBar(open = false, message = '') {
    return { type: 'MANAGE_SNACK_BAR', snackBar: { open, message }}
}

export function manageTabIndex(tabIndex = 0) {
    return { type: 'MANAGE_TAB_INDEX', tabIndex}
}

export function authUser(user) {
    return function(dispatch) {
        axios.post(`${url}login`, extractLoginUser(user))
        .then(res => {
            let message = util.checkValue(res.data.message)
            let success = res.data.success
            let token = res.data.token

            console.log('token', token)

            if(!success && success !== undefined) {
                dispatch(manageSnackBar(true, message))
            } else {
                dispatch(manageSnackBar(true, 'Authentication completed! =D'))
            }
        })
        .catch(err => dispatch(manageSnackBar(true, err)))
    }
}

export function addUser(newUser) {
    return function(dispatch) {
        if(newUser.password !== newUser.repeatedPassword) {
            dispatch(manageSnackBar(true, 'Password and repeated password should be the same'))
        } else {
            axios.post(`${url}users`, extractNewUser(newUser))
            .then(res => {
                dispatch(manageSnackBar(true, 'Your user was successfully added'))
                dispatch(reset('signUpForm'))
                dispatch(manageTabIndex())
            })
            .catch(err => {
                dispatch(manageSnackBar(true, 'It was not possible to save your new user =/'))
            })
        }
    }
}

function extractLoginUser(obj) {
    return {
        name: util.checkValue(obj.username),
        password: util.checkValue(obj.password),
    }
}

function extractNewUser(obj) {
    return {
        name: util.checkValue(obj.name),
        username: util.checkValue(obj.username),
        email: util.checkValue(obj.email),
        password: util.checkValue(obj.password),
    }
}