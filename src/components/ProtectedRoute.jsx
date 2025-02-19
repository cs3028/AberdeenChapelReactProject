import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem("token"); // get token from local storage

    return token ? children : <Navigate to="/login" />; // redirect if not logged in
};

export default ProtectedRoute;