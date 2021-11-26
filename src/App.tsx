import React from 'react';
import Nav from './components/Navbar/Navbar';
import {Routes, Route} from 'react-router-dom';
import './App.scss';
import Welcome from '@/views/Welcome/Welcome';
import Account from '@/views/Account/Account';

// <Nav/>
// <Routes>
//   {/* <Route path=":id" element={<UserProfile />} />
//   <Route path="me" element={<OwnUserProfile />} /> */}
// </Routes>

const child_element = () => {
  return <div> con cac </div>
}

const App = () => {
  return (
    <div className="App">
      <Account child={child_element} />
      {/* <Welcome /> */}
    </div>
  )
};

export default App;
