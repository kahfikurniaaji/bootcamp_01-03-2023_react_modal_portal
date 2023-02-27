// Import module yang diperlukan
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import App from "./component/App";
import reducers from "./redux/reducers/combine-reducers";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Membuat store baru
const store = createStore(reducers, applyMiddleware(thunk));

// Merender App
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
