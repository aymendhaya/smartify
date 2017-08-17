// actions.js
export const addFav = objTrack => ({
    type: 'ADD_FAV',
    objTrack,
});

export const cancelFav = objTrack => ({
    type: 'CANCEL_FAV',
    objTrack,
});