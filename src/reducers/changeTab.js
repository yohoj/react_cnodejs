const changeTab = (state = [], action) => {
    switch (action.type) {
      case 'CHANGE_TAB':
        return action.data || state;
      default:
        return state
    }
  }
  
  export default changeTab