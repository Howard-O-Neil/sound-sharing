import React from 'react';
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
      <nav>
        <Link to="/">Welcome page</Link>
        <Link to="/sign-up">Sign Up</Link>
        <Link to="/sign-in">Sign In</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/artist">Artist</Link>
        <Link to="/playlist">Playlist</Link>
      </nav>
    );
  };

export default Nav;