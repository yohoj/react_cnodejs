const getTopicContent = (state = {}, action) => {
    switch (action.type) {
      case 'GET_TOPIC_CONTENT':
        return {
            ...state,
            ...action.data
        };
      default:
        return state
    }
  }
  
  export default getTopicContent