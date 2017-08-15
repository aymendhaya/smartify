// let nextTodoId = 0

export const addFavTrack = (obj) => ({  //addTodo
  type: 'ADD_FAV_TRACK',
  id: obj.id,
  songname: obj.name
})

// export const setVisibilityFilter = (filter) => ({
//   type: 'SET_VISIBILITY_FILTER',
//   filter
// })

// export const toggleTodo = (id) => ({
//   type: 'TOGGLE_TODO',
//   id
// })
