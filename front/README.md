

//開発の進め方
App.js
importで表示したいコンポーネントをimportする
from以降はファイルパスを書く
<Route exact path="/" component={}/>
component={}にimportしたclassを記述する
npm startコマンドでローカルサーバーを立ち上げる

//Class作成のテンプレ
import React from "react";
import styled from "styled-components";
Components/somethingComponent.js
  class Login extends React.Component {
    render() {
      return(
        <Tag></Tag>
      );
    }
  }

  export default Login;

  const Tag = styled.div`
    text-align: center
  `
