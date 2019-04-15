const initialState = {
  name: "",
  pass: "",
  data: {}
}

export default function LoginReducer (state = initialState, action) {
  switch(action.type){
    case "INPUT_NAME":
      return{
        ...state,
        name: action.payload.name
      }

    case "INPUT_PASS":
      return{
        ...state,
        pass: action.payload.pass
      }

    case "POST_SHOP_DATA_REQUEST":
      return state;

    case "POST_SHOP_DATA_RESULT":
      return {
        ...state,
        data: action.payload.data 
      }


    default:
      return state;
  }
}
