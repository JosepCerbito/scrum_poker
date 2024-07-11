import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/loginPage';
import HomePage from './pages/homePage';

function App() {
  // Check if user is authenticated (e.g., if 'scrumUser' exists in localStorage)
  const isAuthenticated = !!localStorage.getItem('scrumUser');

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/home"
          element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </Router>
  );
}

export default App;
