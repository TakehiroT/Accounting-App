import { connect } from "react-redux";
import Login from "../Components/LoginComponent";
import { inputName, inputPass, postShopData} from "../Actions/LoginActions";

const mapStateToProps = (state) => {
  return {
    name: state.LoginReducer.name,
    pass: state.LoginReducer.pass,
    data: state.LoginReducer.data
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    inputName(name){
      dispatch(inputName(name));
    },
    inputPass(pass){
      dispatch(inputPass(pass));
    },
    postShopData(){
      dispatch(postShopData());
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
