import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from "react-router-redux";
import { Provider } from "react-redux";
import createBrowserHistory from "history/createBrowserHistory";
import createStore from "./CreateStore";
import App from './App';

const history = createBrowserHistory();

const store = createStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
