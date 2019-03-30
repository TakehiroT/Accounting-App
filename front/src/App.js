import React, { Component } from 'react';
import Login from "./Containers/LoginContainer";
import Table from "./Components/TableComponent";
import { Route } from "react-router-dom";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Table}/>
      </div>
    );
  }
}


export default App;
