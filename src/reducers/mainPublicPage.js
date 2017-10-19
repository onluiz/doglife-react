const mainPublicPage = (
    state = {
        snackBar: { open: false, message: '' }
    },
    action
) => {
    switch (action.type) {
        case 'MANAGE_SNACK_BAR': {
            return {
              ...state, 
              snackBar: action.snackBar
            }
        }
        default:
            return state
    }
}
export default mainPublicPage