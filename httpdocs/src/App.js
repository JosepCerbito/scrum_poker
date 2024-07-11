import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/loginPage';
import HomePage from './pages/homePage';
import NotFound from './pages/notFoundPage';
import GlobalStyle from './GlobalStyle';

function App() {
  // Check if user is authenticated (e.g., if 'scrumUser' exists in localStorage)
  const isAuthenticated = !!localStorage.getItem('scrumUser');

  return (
    <>
      <Helmet>
        <title>Scrum Poker</title>
        <link rel="icon" href="%PUBLIC_URL%/favicon.png" />
      </Helmet>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/"
            element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />}
          />
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
