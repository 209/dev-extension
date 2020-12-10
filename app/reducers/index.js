import { combineReducers } from 'redux';
import browser from '../stores/browser/reducer';
import common from '../stores/common/reducer';
import activeTab from '../stores/activeTab/reducer';
import errorLog from '../stores/errorLog/reducer';

export default combineReducers({
  browser,
  common,
  activeTab,
  errorLog,
});
