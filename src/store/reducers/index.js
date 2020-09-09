import {combineReducers} from 'redux';
import generalReducer from './generalReducer';
// import reducerIndex from '../../applications/constants/ReducerIndex'


const rootReducer = combineReducers({
    app: generalReducer,
});

export default rootReducer;