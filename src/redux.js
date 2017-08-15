import { applyMiddleware, combineReducers, createStore, } from 'redux';
import thunk from 'redux-thunk';

// actions.js
export const addFav = objTrack => ({
    type: 'ADD_FAV',
    objTrack,
});

export const cancelFav = objTrack => ({
    type: 'CANCEL_FAV',
    objTrack,
});

// reducers.js

export const manageFav = (state = [], action) => {
    switch (action.type) {
        case 'ADD_FAV':
            { return state.concat(action.objTrack); }

        case 'CANCEL_FAV':
            return state.filter(obj => JSON.stringify(obj) !== JSON.stringify(action.objTrack));

        default:
            return state;
    }
};

export const reducers = combineReducers({
    manageFav,
});

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