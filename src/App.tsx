import './App.css';
import React from 'react';

import DynamicForm from './components/Common/DynamicForm';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


function App() {
  

  return (
    <Router>
      <div className="app">
        <h1>Request Form</h1>
        <Routes>
          <Route path="/" element={<Navigate to="/create" replace />} />
          <Route path="/create" element={<DynamicForm />} />        </Routes>
      </div>
    </Router>
  );
}

export default App;


