const dashboard = (
  state = {
    dogs: [], 
    addDogDialog: { 
      open: false,
      dog: {
        _id: '',
        name: '',
        nickname: '',
        birthdate: '',
        notes: '',
      },
    },
    snackBar: { open: false, message: '' }
  }, action
  
) => {
    switch (action.type) {
      case 'SHOW_ALL_SUCCESS':
        return {
            ...state,
            dogs: action.dogs,
          }
      case 'MANAGE_ADD_DOG_DIALOG': {
        return {
          ...state,
          addDogDialog: action.addDogDialog,
        }
      }
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
  
  export default dashboard