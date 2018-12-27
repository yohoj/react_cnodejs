export const getTopicsAction = (data, bNewTab=false) => ({
  type: 'GET_TOPICS',
  data,
  bNewTab,
});
export const changeTabAction = data => ({
  type: 'CHANGE_TAB',
  data
});
export const getUserInfoAction = userInfo => ({
    type: 'GET_USER_INFO',
    userInfo,
});
export const getTopicContentAction = data => ({
    type: 'GET_TOPIC_CONTENT',
    data,
});
export const switchHomeTabAction = tab => ({
    type: 'SWITCH_HOME_TAB',
    tab,
});