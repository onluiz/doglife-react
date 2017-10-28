const mainPublicPage = (
    state = {
        snackBar: { open: false, message: '' },
        tabIndex: 0
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
        case 'MANAGE_TAB_INDEX': {
            return {
              ...state, 
              tabIndex: action.tabIndex
            }
        }
        default:
            return state
    }
}
export default mainPublicPage