const Track = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      case 'TOGGLE_TODO':
        return state.map(Track =>
          (Track.id === action.id) 
            ? {...Track, completed: !Track.completed}
            : Track
        )
      default:
        return state
    }
  }
  
  export default Track
  