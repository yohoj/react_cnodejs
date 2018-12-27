const getUserInfo = (state = {}, action) => {
    switch (action.type) {
      case 'GET_USER_INFO':
        return {
            ...state,
            ...action.userInfo
        };
      default:
        return state
    }
  }
  
  export default getUserInfo