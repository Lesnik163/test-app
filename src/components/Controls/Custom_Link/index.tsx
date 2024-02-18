import React from "react";
import { NavLink as RouterNavLink, useMatch } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";

type CustomNavLinkProps = {
  children: React.ReactNode;
  to: string;
  [key: string]: any;
};
const CustomNavLink = ({ children, to, ...props }: CustomNavLinkProps) => {
  const match = useMatch(to);
  return (
    <RouterNavLink
      to={to}
      style={{ color: match ? "yellow" : "white" }}
      {...props}
    >
      <MuiLink component="button" sx={{ color: "inherit", textDecoration: match ? "underline" : "" }}>
        {children}
      </MuiLink>
    </RouterNavLink>
  );
};

export default CustomNavLink;
