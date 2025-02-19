import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem("token"); // get token from local storage

    // redirect if not logged in
    if (token) {
        return children;  // if user is logged in, render the dashboard
    } else {
        return <Navigate to="/login" />;  // if not logged in, redirect them to the login page
    }
};

export default ProtectedRoute;