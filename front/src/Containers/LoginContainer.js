import { connect } from "react-redux";
import Login from "../Components/LoginComponent";
import { inputName } from "../Actions/LoginActions";

const mapStateToProps = (state) => {
  return {
    name: state.LoginReducer.name
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    inputName(name){
      dispatch(inputName(name));
    },
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
