import React from 'react'
// import { NavLink } from 'react-router-dom';
import CustomLink from '../../Controls/Custom_Link';

function Header() {
  return (
    <div>
      <CustomLink to='/'>Titular page</CustomLink>
      <CustomLink to='/service'>Service page</CustomLink>
      <CustomLink to='/information'>Information page</CustomLink>
      <CustomLink to='/photos'>Photo page</CustomLink>
      <CustomLink to='/contacts'>Contacts page</CustomLink>
    </div>
  )
}

export default Header
