const switchHomeTab = (state = 'all', action) => {
    switch (action.type) {
      case 'SWITCH_HOME_TAB':
        return action.tab || state;
      default:
        return state
    }
  }
  
  export default switchHomeTab