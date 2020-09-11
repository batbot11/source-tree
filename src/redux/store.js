import {
  createStore,
  combineReducers
} from 'redux';
import authReducer from './reducers/authReducer';
import dataReducer from './reducers/dataReducer';
import projectsReducer from './reducers/projectsReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  data: dataReducer,
  projects: projectsReducer
});

const store = createStore(
  rootReducer, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;