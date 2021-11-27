import React from 'react';
import Nav from './components/Navbar/Navbar';
import {Routes, Route} from 'react-router-dom';
import './App.scss';
import Welcome from '@/views/Welcome/Welcome';
import Account from '@/views/Account/Account';
import SignIn from '@/components/SignIn/SignIn';
import SignUp from '@/components/SignUp/SignUp';

// <Nav/>
// <Routes>
//   {/* <Route path=":id" element={<UserProfile />} />
//   <Route path="me" element={<OwnUserProfile />} /> */}
// </Routes>

const App = () => {
  return (
    <div className="App">
      <Account child={SignUp} />
      {/* <Welcome /> */}
    </div>
  )
};

export default App;
