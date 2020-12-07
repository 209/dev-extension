import { combineReducers } from 'redux';
import settings from '../stores/settings/reducer';
import chrome from '../stores/browser/reducer';
import common from '../stores/common/reducer';
import marketplaces from '../stores/marketplaces/reducer';
import SF from '../stores/SF/reducer';
import SGChanges from '../stores/SGChanges/reducer';
import toEbay from '../stores/toEbay/reducer';
import toSG from '../stores/toSG/reducer';
import toSGSold from '../stores/toSGSold/reducer';
import errorLog from '../stores/errorLog/reducer';

export default combineReducers({
  settings,
  chrome,
  common,
  marketplaces,
  SF,
  SGChanges,
  toEbay,
  toSG,
  toSGSold,
  errorLog,
});
