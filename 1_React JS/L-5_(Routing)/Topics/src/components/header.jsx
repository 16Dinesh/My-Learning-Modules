import React from "react";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h3>Header</h3>

      <nav>
        <Link to="/home" style={{margin:"1rem"}}>Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Outlet/>
    </div>
  );
};

export default Header;
