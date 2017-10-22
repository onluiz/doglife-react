export function manageSnackBar(open = false, message = '') {
    return { type: 'MANAGE_SNACK_BAR', snackBar: { open, message }}
}

export function authUser(user) {
    return function(dispatch) {
        dispatch(manageSnackBar(true, 'User auth algorithm in action!'))
    }
}

export function addUser(newUser) {
    return function(dispatch) {
        if(newUser.password !== newUser.repeatedPassword) {
            dispatch(manageSnackBar(true, 'Password and repeated password should be the same'))
        } else {
            dispatch(manageSnackBar(true, 'Now everything is fine'))
        }
    }
}

export function updateUser(user) {
    return function(dispatch) {
        dispatch(manageSnackBar(true, 'Updating user'))
        console.log('updateUser', user);
    }
}