const Favlist = (state = [], action) => {
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
        return state.map(Favlist =>
          (Favlist.id === action.id) 
            ? {...Favlist, completed: !Favlist.completed}
            : Favlist
        )
      default:
        return state
    }
  }
  
  export default Favlist
  