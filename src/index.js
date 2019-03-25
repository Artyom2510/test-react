import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import './index.css';
import App from './App';
import reducer from './reducers';
// import * as serviceWorker from './serviceWorker';
// import { Router, Route, hashHistory } from 'react-roter';
// import { create } from 'domain';

// const store = createStore(reducer, composeWithDevtools(applyMiddleware(thunk)));

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  
  document.getElementById('root'));
  // <Provider store ={store}>
  //   <Router history={hahHistory}>
  //     <Route path="/" component={App}/>
  //   </Router>
  // </Provider>,

// serviceWorker.unregister();


// const addTrackBtn = document.querySelector('.addTrack');
// const trackInput = document.querySelector('.trackInput');
// const list = document.querySelector('.list');

// store.subscribe(() => {
//   list.innerHTML = '';
//   trackInput.value = '';
//   store.getState().forEach(track => {
//     const li = document.createElement('li');
//     li.textContent = track;
//     list.appendChild(li);
//   });
// })


// addTrackBtn.addEventListener('click', () => {
//   const trackName = trackInput.value;
//   store.dispatch({ type: 'ADD_TRACK', payload: trackName});
// });
