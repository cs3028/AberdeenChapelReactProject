import React, {useEffect, useState} from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5001/dashboard", { credentials: "include" })
            .then(res => res.json())
            .then(data => setIsAuthenticated(data.success))
            .catch(() => setIsAuthenticated(false));
    }, []);
    // redirect if not logged in
    if (isAuthenticated === null) return <p>Loading...</p>;

    return isAuthenticated ? children : <Navigate to="/Login" />;
};

export default ProtectedRoute;