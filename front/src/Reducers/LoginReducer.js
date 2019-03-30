const initialState = {
  name: "",
}

export default function LoginReducer (state = initialState, action) {
  switch(action.type){
    case "INPUT_NAME":
      return{
        ...state,
        name: action.payload.name
      }

    default:
      return state;
  }
}
