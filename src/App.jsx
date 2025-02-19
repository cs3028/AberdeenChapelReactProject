import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MapComponent from './components/ChapelComponent'; // Adjust the path as necessary
import Layout from './components/Layout';
import Info from './components/Info';
import About from './components/About';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={
            <Layout>
              <MapComponent />
            </Layout>
           }
          />
          <Route path="/info" element={
            <Layout>
              <Info />
            </Layout>
           }
          />
          <Route path="/about" element={
            <Layout>
              <About />
            </Layout>
           }
          />
            <Route path="/about" element={
                <Layout>
                    <About />
                </Layout>
            }
            />
            <Route path="/login" element={
                <Layout>
                    <Login />
                </Layout>
            }
            />
            {/* 🔹 Login Page (no Layout, so it’s a clean login screen) */}
            <Route path="/login" element={<Login />} />

            {/* 🔹 Protected Route (Only logged-in users can see this) */}
            <Route path="/dashboard" element={
                <ProtectedRoute>
                    <Layout>
                        <Dashboard />
                    </Layout>
                </ProtectedRoute>
            } />
        </Routes>
      </Router>
  );
}

export default App;

