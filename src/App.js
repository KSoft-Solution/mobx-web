import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Row } from "antd";
import {ToastContainer} from 'react-toastify'
import { NotFound, Loading } from "./components";

const Home = lazy(() => import("./pages/home"));
const Signup = lazy(() => import("./pages/signup"));
const Login = lazy(() => import("./pages/login"));

const App = () => {
  return (
    <Row justify="center" className="app">
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="register" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer/>
      </Suspense>
    </Row>
  );
};

export default App;
