import { combineReducers } from 'redux';
import getTopics from './getTopics';
import getTopicContent from './getTopicContent';
import getUserInfo from './getUserInfo';
import switchHomeTab from './switchHomeTab';
import changeTab from './changeTab';

export default combineReducers({
    getTopics,
    getUserInfo,
    getTopicContent,
    switchHomeTab,
    changeTab,
})