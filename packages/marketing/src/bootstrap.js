import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// mount fn to start up the app
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// if we are in dev or isolation
if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#_marketing-dev-root");
  if (!!el) {
    mount(el);
  }
}

// if we are running through container
export { mount };
