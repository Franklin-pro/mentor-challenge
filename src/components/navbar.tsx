import React from "react";
import { Link } from "react-router-dom";


function NavBar(props:any) {
  return (
    <>
      <div className="nav-container">
        <div className="navBar">
          <div className="bar">
            <h1>Gallerias.</h1>
            <Link to={'./display'} className="slide">{props.link}</Link>
          </div>
          <hr style={{width:'97%', margin:'0 auto'}}/>
        </div>
      </div>
    </>
  )
}

export default NavBar;
