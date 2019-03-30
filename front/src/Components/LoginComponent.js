import React from "react";
import styled from "styled-components";

class Login extends React.Component {
  render() {
    return(
      <AllArea>
        <Title>ログインページ</Title>
        <div><InputField placeholder="店舗名" onChange={(e)=>{this.props.inputName(e.target.value)}}/></div>
        <div><InputField placeholder="パスワード"/></div>
        <LoginButton>ログイン</LoginButton>
      </AllArea>
    );
  }
}

export default Login;

const AllArea = styled.div`
  margin-top: 10%;
  text-align: center;
  background-color: white;
`

const Title = styled.div`
  color: #99FFCC;
  margin-top: 0;
  font-size: 2.0em;
`

const InputField = styled.input`
  width: 60%;
  height: 30px;
  margin-top: 3%;
  margin-bottom: 3%;
  border: none;
  border-bottom: #CCCCCC solid 1px;
  font-size: 16px;
  &:focus{
    outline: 0;
  }
`

const LoginButton = styled.button`
  width: 60%;
  height: 40px;
  color: white;
  font-size: 1.2em;
  border: #99FFCC solid 1px;
  background-color: #99FFCC;
  margin-top: 7%;
  &:hover{
    background-color: white;
    color:#99FFCC;
  }
  &:focus{
    outline: 0;
  }
`
