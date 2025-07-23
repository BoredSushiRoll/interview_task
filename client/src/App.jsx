import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Items from './components/Items';
import { isAuthenticated } from './auth';

function App() {
  const [auth, setAuth] = useState(isAuthenticated());

  // Re-check auth on token change 
  useEffect(() => {
    const checkAuth = () => setAuth(isAuthenticated());

    // Run once on load
    checkAuth();

    // Listen to localStorage updates across tabs 
    window.addEventListener('storage', checkAuth);

    return () => window.removeEventListener('storage', checkAuth);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route path="/items" element={auth ? <Items /> : <Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
