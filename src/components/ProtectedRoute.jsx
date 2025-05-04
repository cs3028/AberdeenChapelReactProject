// src/components/ProtectedRoute.jsx
import React, { useState, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebaseConfig';

const ProtectedRoute = ({ children }) => {
  // state to track authentication status:
  // null = initial state, checking authentication
  // false = user is not authenticated
  // true = user is authenticated
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const location = useLocation();

  useEffect(() => {
    // onAuthStateChanged returns an unsubscribe function
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // user is signed in.
        console.log("ProtectedRoute Listener: User is signed IN", user.uid);
        setIsAuthenticated(true); // update state to authenticated
      } else {
        // user is signed out.
        console.log("ProtectedRoute Listener: User is signed OUT");
        setIsAuthenticated(false); // update state to not authenticated
      }
    });

    // unsubscribe the listener when the component unmounts to prevent memory leaks
    return () => {
        console.log("ProtectedRoute: Cleaning up auth listener.");
        unsubscribe();
    }
  }, []); // empty dependency array means this effect runs only once on mount and cleanup runs on unmount

  // while checking auth status, show a loading indicator
  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  // if the user is not authenticated, redirect them to the login page
  // we also pass the location they were trying to access in the state,
  // so the login page could potentially redirect them back after login (optional feature).
  // ensure the path '/login' matches the case used in your App.jsx routes.
  if (!isAuthenticated) {
    console.log("ProtectedRoute: User not authenticated, redirecting to /login");
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  console.log("ProtectedRoute: User authenticated, rendering children.");
  return children;
};

export default ProtectedRoute;
