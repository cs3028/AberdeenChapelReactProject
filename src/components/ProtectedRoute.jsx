// src/components/ProtectedRoute.jsx
import React, { useState, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebaseConfig';

const ProtectedRoute = ({ children }) => {
  // State to track authentication status:
  // null = Initial state, checking authentication
  // false = User is not authenticated
  // true = User is authenticated
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const location = useLocation();

  useEffect(() => {
    // Set up the Firebase listener when the component mounts
    // onAuthStateChanged returns an unsubscribe function
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in.
        console.log("ProtectedRoute Listener: User is signed IN", user.uid);
        setIsAuthenticated(true); // Update state to authenticated
      } else {
        // User is signed out.
        console.log("ProtectedRoute Listener: User is signed OUT");
        setIsAuthenticated(false); // Update state to not authenticated
      }
    });

    // Cleanup function: Unsubscribe the listener when the component unmounts
    // This prevents memory leaks
    return () => {
        console.log("ProtectedRoute: Cleaning up auth listener.");
        unsubscribe();
    }
  }, []); // Empty dependency array means this effect runs only once on mount and cleanup runs on unmount

  // While checking auth status, show a loading indicator
  if (isAuthenticated === null) {
    // You can replace this with a more sophisticated loading spinner component
    return <div>Loading...</div>;
  }

  // If the user is not authenticated, redirect them to the login page
  // We also pass the location they were trying to access in the state,
  // so the login page could potentially redirect them back after login (optional feature).
  // Ensure the path '/login' matches the case used in your App.jsx routes.
  if (!isAuthenticated) {
    console.log("ProtectedRoute: User not authenticated, redirecting to /login");
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If the user IS authenticated, render the child components
  // (which in your case is <Layout><Dashboard /></Layout>)
  console.log("ProtectedRoute: User authenticated, rendering children.");
  return children;
};

export default ProtectedRoute;
