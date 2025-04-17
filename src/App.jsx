import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import CSS files
// import './index.css'; // Global styles
import './pages/BlogPage.css'; // Blog page specific styles
import './pages/Home.css'; // Home page specific styles (if needed)
import './pages/Home.css';


// Import components
import BlogList from './pages/BlogList';  // Corrected import
import BlogPage from './pages/BlogPage';

const App = () => {
  return (
    <Router>
      <div>
        <h1 style={{ textAlign: 'center', marginTop: '2rem' }}>Blog App</h1>
        <Routes>
          <Route path="/" element={<BlogList />} />  {/* Change Home to BlogList */}
          <Route path="/blog/:id" element={<BlogPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
