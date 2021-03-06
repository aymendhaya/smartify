import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';  
import { store } from './Redux/Stores/Store';

// import Store from './store';
// const StoreInstance = Store();

ReactDOM.render(
<Provider store={store}><App /></Provider>, 
document.getElementById('root'));

registerServiceWorker();
