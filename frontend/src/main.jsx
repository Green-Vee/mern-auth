import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";
import HomeScreen from "./screens/HomeScreen.jsx";
import Login from "./screens/Login.jsx";
import RegisterScreen from "./screens/Register.jsx";
import store from "./store.js";
import ProfileScreen from "./screens/ProfileScreen.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" index={true} element={<HomeScreen />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegisterScreen />} />

      {/* Private Routes */}
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/profile" element={<ProfileScreen />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);