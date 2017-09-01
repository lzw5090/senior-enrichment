import React, { Component } from 'react';
//import { withRouter, NavLink } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { deleteCampus } from '../reducers/campuses';

const AllCampuses = (props) => {
  const { campuses, handleClick } = props


  return (
    <div>
      <p className='add'>
        <p1>AddCampuses</p1>
        <NavLink to="/campuses/add" activeClassName="active">
          <button
            type="submit"
            className="btn btn-success">
            AddCampuses
          </button>
        </NavLink>

      </p>
      {

        campuses.map(campus => {
          return (
            <ul key={campus.id}>
              <li >
                <span>{campus.name}</span>

                <NavLink to={`/campuses/${campus.id}`}>

                  <button
                    type="submit"
                    className="btn btn-success">
                    Information
                  </button>
                </NavLink>
                <NavLink to={`/campuses/${campus.id}/edit`}>
                  <button
                    type="submit"
                    className="btn btn-success">
                    Edit
                  </button>
                </NavLink>

                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={() => handleClick(campus)}>
                  Remove
                  </button>
              </li>
            </ul>
          );
        })
      }
    </div>
  )
}


const mapStateToProps = (state) => {

  return {
    campuses: state.campuses
  }
}
const mapDispatchToProps = function (dispatch) {
  return {

    handleClick(campus) {
      dispatch(deleteCampus(campus))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AllCampuses);