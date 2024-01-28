import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <Link to="/">Titular page </Link>
      <Link to="/photo">Photo page </Link>
      <Link to="/contacts">Contacts page</Link>
    </div>
  )
}

export default Header
