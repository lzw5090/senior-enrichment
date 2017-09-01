import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteStudent } from '../reducers/students';


function AllStudents(props) {
  const { students, handleClick } = props


  return (
    <div>
      <p className='add'>
        <p1>AddStudents</p1>
        <NavLink to="/students/add" activeClassName="active">
          <button
            type="submit"
            className="btn btn-success">
            AddStudents
          </button>
        </NavLink>
      </p>
      {
        students.map(student => {
          return (
            <ul key={student.id}>

              <li >
                <span> {student.name}</span>
                <NavLink to={`/students/${student.id}`}>

                  <button
                    type="submit"
                    className="btn btn-success">
                    Information
                  </button>
                </NavLink>
                <NavLink to={`/students/${student.id}/edit`}>
                  <button
                    type="submit"
                    className="btn btn-success">
                    Edit
                  </button>
                </NavLink>

                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={() => handleClick(student)}>
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


const mapStateToProps = function (state) {
  return {
    students: state.students
  }
}


const mapDispatchToProps = function (dispatch) {
  return {

    handleClick(student) {
      dispatch(deleteStudent(student))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllStudents);