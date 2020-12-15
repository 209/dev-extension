import { combineReducers } from 'redux';
import browser from '../stores/browser/reducer';
import common from '../stores/common/reducer';
import activeTab from '../stores/activeTab/reducer';
import settings from '../stores/settings/reducer';

export default combineReducers({
  browser,
  common,
  activeTab,
  settings,
});
