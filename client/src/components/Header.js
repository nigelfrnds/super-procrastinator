import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
     <Link className="navbar-brand" to="/">{`SP`}</Link>

     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
       <span className="navbar-toggler-icon"></span>
     </button>

     <div className="collapse navbar-collapse" id="collapsibleNavbar">
       <ul className="navbar-nav ml-auto">
         <li className="nav-item">
           <Link className="nav-link" to="/login">Login <i className="fas fa-user"></i></Link>
         </li>
         <li className="nav-item">
           <Link className="nav-link" to="/register">Register <i className="fas fa-edit"></i></Link>
         </li>
       </ul>
     </div>
   </nav>
  );
};

export default Header;
