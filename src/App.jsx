import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Create from './pages/Create';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/simplenotesapp/" element={<Home />} />
        <Route path="/simplenotesapp/create" element={<Create />} />
      </Routes>
    </Router>
  );
};

export default App;
