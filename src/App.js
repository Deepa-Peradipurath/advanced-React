import React,{ lazy,Suspense } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import AutoSearch from './components/autoSearch';
import EntryList from './components/entryList';
import TestList from './components/testList';
import GenerateList from './components/hoc/generateList';
//import CombineList from './components/combineList';
import NavBar from './components/navbar';
import UseMemoComp from './components/useMemoComp';
import Users from './components/users';
import Throttle from './components/throttleComp';
import AgGrid from './components/agGrid';
import ErrorBoundary from './components/hoc/errorBoundary';
import { getEntries, getTrialEntries } from './endpoint';
import {createStore ,applyMiddleware} from 'redux';
import {Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import myReducer from './store/reducer';
import { watchFn } from './store/saga';



const mysaga = createSagaMiddleware();
const store = createStore(myReducer, applyMiddleware(mysaga));

mysaga.run(watchFn);

//const EntryListComp = lazy(() => import('./components/entryList'));
//const TestListComp = lazy(() => import('./components/testList'));
const CombineListComp = lazy(() => import('./components/combineList'));
const UsersComp = lazy(() => import('./components/users'));

const EntryListWrapper =  GenerateList(EntryList,getEntries);
const TestListWrapper =  GenerateList(TestList,getTrialEntries);

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
        <Provider store={store}>
            <ErrorBoundary>
              <NavBar/>
            </ErrorBoundary>
            <Suspense fallback={<div>...Loading</div>}>
              <Switch>
                <Route path="/" component={ AutoSearch } exact/>
                <Route path="/testList" component= { TestListWrapper } />
                <Route path="/EntryList" component= { EntryListWrapper } />
                <Route path="/combinedList" component= { CombineListComp } />
                <Route path='/UseMemoComp' component={ UseMemoComp }/>
                <Route path="/user" component={ UsersComp }/>
                <Route path="/throttle" component={ Throttle }/>
                <Route path="/agGrid" component={ AgGrid }/>
              </Switch>
            </Suspense>
        </Provider>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
