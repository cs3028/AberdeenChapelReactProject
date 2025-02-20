import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const [message, setMessage] = useState("Loading...");
    const navigate = useNavigate(); // initialize useNavigate

    useEffect(() => {
        fetch("http://localhost:5001/dashboard", { credentials: "include" })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setMessage(data.message);
                } else {
                    setMessage("Unauthorized");
                    navigate("/login");  // redirect if not logged in
                }
            })
            .catch(() => setMessage("Unauthorized"));
    }, [navigate]);

    const handleLogout = async () => {
        try {
            const response = await fetch("http://localhost:5001/logout", {
                method: "POST",
                credentials: "include"
            });

            const data = await response.json();
            console.log("Logout response:", data);

            if (data.success) {
                alert("You have been logged out!");
                navigate("/login");
            } else {
                alert("Logout failed!");
            }
        } catch (err) {
            console.error("Logout request failed:", err);
        }
    };

    return (
        <div className="p-6 text-center">
            <h1 className="text-3xl font-bold">Welcome to the Dashboard</h1>
            <p>{message}</p>
            <button
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
                onClick={handleLogout}
            >
                Logout
            </button>
        </div>
    );
};

export default Dashboard;