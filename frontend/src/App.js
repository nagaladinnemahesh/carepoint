import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import Signup from './components/signup'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/signup' />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>
  );
}

export default App;
