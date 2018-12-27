const getTopics = (state = [], action) => {
    switch (action.type) {
      case 'GET_TOPICS':
        if(action.bNewTab){
            return action.data || state;
        }
        else{
            return [
                ...state,
                ...action.data
              ];
        }
      default:
        return state
    }
  }
  
  export default getTopics