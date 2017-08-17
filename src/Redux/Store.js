import { applyMiddleware, createStore, } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './Reducers'




// store.js
export function configureStore(initialState = {}) {
    const store = createStore(
        reducers,
        initialState,
        applyMiddleware(thunk)
    )
    return store;
};

export const store = configureStore();

store.subscribe(() => console.log(store.getState().manageFav))