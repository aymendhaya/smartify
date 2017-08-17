// reducers.js
import { combineReducers } from 'redux';


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