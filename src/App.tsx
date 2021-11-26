import React from 'react';
import Nav from './components/Navbar';
import {Routes, Route} from 'react-router-dom';
import './App.scss';
import Welcome from '@/views/Welcome/Welcome';

// <Nav/>
// <Routes>
//   {/* <Route path=":id" element={<UserProfile />} />
//   <Route path="me" element={<OwnUserProfile />} /> */}
// </Routes>

const App = () => {
  return (
    <div className="App">
      <Welcome />
    </div>
  )
};

export default App;
