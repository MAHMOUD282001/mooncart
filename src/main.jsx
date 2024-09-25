import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ShowProductDataProvider } from "./context/ShowProductDataContext.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={true}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    <BrowserRouter>
      <Provider store={store}>
        <ShowProductDataProvider>
          <App />
        </ShowProductDataProvider>
      </Provider>
    </BrowserRouter>
    <ToastContainer />
  </StrictMode>
);
