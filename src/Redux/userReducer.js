// userReducer.js
const initialState = {
    userAplication: null,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USER':
        console.log('SET_USER action dispatched:', action.payload); // Ver el valor que se está seteando
        return { ...state, userAplication: action.payload };
      case 'CLEAR_USER':
        return { ...state, userAplication: null };
      default:
        return state;
    }
  };
  
  export default userReducer;
  