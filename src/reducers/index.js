import { combineReducers } from 'redux'
import bill from './bill';
import bills from './bills';
import permission from './permission';
import checkoff from './checkoff';
import transfer from './transfer';
import subscription from './subscription';
import queryById from './queryById';
import offlineStatus from './offlineStatus';

const rootReducer = combineReducers({
    bill,bills,permission,checkoff,transfer,subscription,queryById,offlineStatus
})

export default rootReducer
