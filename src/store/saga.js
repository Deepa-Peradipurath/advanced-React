import { takeLatest,put} from 'redux-saga/effects';
import { autoComplete, listForAg } from '../endpoint';


function* getResults(params){
    try {
        console.log("params",params) ;
        const list = yield autoComplete(params.val);
        console.log(list);
        yield put ({ type: "SET_SEARCH_RESULTS", val:list.data.entries });
    } catch(error) {
        console.log("API error", error);
    }
    
}

function* listForAGResults(){
    try{
        const ListforAg = yield listForAg();
        if(ListforAg.status === 200){
            yield put({ type: "SET_COMBINED_LIST_RESULTS", val: ListforAg.data});
        }
    } catch(err){
        console.log("API error", err);
    }
}

export function* watchFn(){
    yield takeLatest("GET_SEARCH_RESULTS", getResults);
    yield takeLatest("GET_COMBINED_LIST_RESULTS", listForAGResults);
}
