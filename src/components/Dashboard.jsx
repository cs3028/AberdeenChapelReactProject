import React from "react";

const Dashboard = () => {
    return (
        <div className="p-6 text-center">
            <h1 className="text-3xl font-bold">Welcome to the Dashboard</h1>
            <p>You are logged in!</p>
            <button
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
                onClick={() => {
                    localStorage.removeItem("token"); // Remove token
                    window.location.href = "/login"; // Redirect to login
                }}
            >
                Logout
            </button>
        </div>
    );
};

export default Dashboard;