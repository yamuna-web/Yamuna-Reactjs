// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./Login";
import ParamsAndQuery from "./ParamsAndQuery";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/protected"
        element={
          <ProtectedRoute>
            <ParamsAndQuery />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;
