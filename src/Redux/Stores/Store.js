import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { manageFav } from '../Reducers/TrackReducers'




// store.js
export function configureStore(initialState = {}) {
    const reducers = combineReducers({manageFav})
    const store = createStore(
        reducers,
        initialState,
        applyMiddleware(thunk)
    )
    return store;
};

export const store = configureStore();

store.subscribe(() => console.log(store.getState().manageFav))