import { all } from 'redux-saga/effects';
import chrome from '../stores/browser/saga';
import common from '../stores/common/saga';
import marketplaces from '../stores/marketplaces/saga';
import SF from '../stores/SF/saga';
import SGChanges from '../stores/SGChanges/saga';
import toEbay from '../stores/toEbay/saga';
import toSG from '../stores/toSG/saga';
import toSGSold from '../stores/toSGSold/saga';
import errorLog from '../stores/errorLog/saga';
import settings from '../stores/settings/saga';

export default function* rootSaga() {
  yield all([
    ...chrome(),
    ...common(),
    ...marketplaces(),
    ...SF(),
    ...SGChanges(),
    ...toEbay(),
    ...toSG(),
    ...toSGSold(),
    ...errorLog(),
    ...settings(),
  ]);
}
