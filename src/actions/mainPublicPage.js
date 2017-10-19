export function manageSnackBar(open = false, message = '') {
    return { type: 'MANAGE_SNACK_BAR', snackBar: { open, message }}
}

export function addUser(newUser) {
    return function(dispatch) {
        console.log('addUser', newUser);
    }
}

export function updateUser(user) {
    return function(dispatch) {
    console.log('updateUser', user);
    }
}