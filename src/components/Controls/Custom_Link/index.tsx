import React, { memo } from 'react'
import { NavLink, useMatch } from 'react-router-dom';

type CustomLinkProps = {
  children: React.ReactNode;
  to: string;
  [key: string]: any;
}
const CustomLink = ({children, to, ...props}: CustomLinkProps) => {
  const match = useMatch(to);
  return (
    <NavLink 
    to={to} 
    style={{color: match ? 'blueviolet': 'black'}}
    {...props}
    >
      {children}
    </NavLink>
  )
}

export default memo(CustomLink);
