import {createStore} from 'redux';
import reducer from  './reducer';
const inintialState = {
    count:0
}
//参数1是 reducer 参数2是state
const store = createStore(reducer,inintialState);

export default store;