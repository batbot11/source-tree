import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Amplify from 'aws-amplify';
import { Provider } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { cognito } from './utils/config';
import * as serviceWorker from './serviceWorker';
import store from './redux/store';

// console.log('env variable', process.env.USER_POOL_ID);

Amplify.configure({
  Auth: {
    mandatorySignId: true,
    region: cognito.REGION,
    userPoolId: cognito.USER_POOL_ID,
    userPoolWebClientId: cognito.APP_CLIENT_ID,
  }
});


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <ToastContainer position="bottom-left" />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
