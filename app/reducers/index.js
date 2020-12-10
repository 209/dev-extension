import { combineReducers } from 'redux';
import chrome from '../stores/browser/reducer';
import common from '../stores/common/reducer';
import errorLog from '../stores/errorLog/reducer';

export default combineReducers({
  chrome,
  common,
  errorLog,
});
