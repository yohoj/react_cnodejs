import { combineReducers } from 'redux';
import getTopics from './getTopics';
import getTopicContent from './getTopicContent';
import getUserInfo from './getUserInfo';
import switchHomeTab from './switchHomeTab';
import changeTab from './changeTab';
import login from './login';

export default combineReducers({
    getTopics,
    getUserInfo,
    getTopicContent,
    switchHomeTab,
    changeTab,
    login,
})