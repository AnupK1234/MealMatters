import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App.jsx";
import "./index.css";
import { persistor, store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-krih01y84pwvcgs8.us.auth0.com"
    clientId="4D4MG0806KOKGYfz3iUyAJbqQMLtEJOP"
    cacheLocation="localstorage"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </Auth0Provider>
);
