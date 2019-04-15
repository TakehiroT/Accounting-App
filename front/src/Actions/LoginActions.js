import axios from "axios";

export const inputName = (name) => ({
  type: "INPUT_NAME",
  payload:{
    name,
  }
});

export const inputPass = (pass) => ({
  type: "INPUT_PASS",
  payload:{
    pass,
  }
})

export const postShopDataRequest = () => ({
  type: "POST_SHOP_DATA_REQUEST",
})

export const postShopDataResult = (data) => ({
  type: "POST_SHOP_DATA_RESULT",
  payload: {
    data
  }
})

export const postShopData = () => {
  return async (dispatch, getState) => {
    dispatch(postShopDataRequest());
    const loginData = getState().LoginReducer;
    const data = {
      name: loginData.name,
      pass: loginData.pass
    };
    try{
        const response = await axios.post("/database/login", data);
        const result = response.data;
        dispatch(postShopDataResult(result));
        console.log(result);
    } catch(err) {
      dispatch(postShopDataResult(err))
      console.log(err);
    }
  };

}
