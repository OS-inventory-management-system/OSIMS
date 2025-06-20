//import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CollectionsBoard from './Collections/Collectionsboard.tsx';

import Collections from './Collections/Collections';
import Login from './Login/Login.tsx';
import { Home } from './Home/Home';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route
          path='/collections'
          element={
            <Collections
              collectionName='Default Collection'
              initialItems={[]}
            />
          }
        />
        <Route path='/collections' element={<CollectionsBoard />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
