import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Providers } from "./providers/index";
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <App />
      </Providers>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

