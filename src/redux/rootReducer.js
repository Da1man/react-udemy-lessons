import counter1 from "./Reducers/counter1";
import counter2 from "./Reducers/counter2";
import {combineReducers} from 'redux';

export default combineReducers({
  counter1, counter2
})
