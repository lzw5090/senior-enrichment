import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink, withRouter } from 'react-router-dom';

/* -----------------    COMPONENT     ------------------ */

export default class Navbar extends React.Component {
  
  render() {
    return (
      <nav className="navbar navbar-default">
        <div >

        <div className="navbar-header">
            <Link className="navbar-brand" to="/"><img src="/images/home1.jpg" height="100" width="100"/></Link>
          </div>
          
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li>
                <NavLink to="/campuses" activeClassName="active">Campuses</NavLink>
              </li>
              <li>
                <NavLink to="/students" activeClassName="active">Students</NavLink>
              </li>
              
            </ul>
            
          </div>


          
          
          
        </div>
      </nav>
    );
  }
}

  

