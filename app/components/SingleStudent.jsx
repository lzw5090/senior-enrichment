import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const SingleStudent = (props) => {
  const { campuses, student } = props
  if (!student) return (<div />)
  const campus = campuses.find(campus => campus.id === student.campusId)
  if (!campus) return (<div />)

  return (
    <div className="SingleStudent">
      {
        <div className="banner text-center text-inverted">

          <h1>Name: {student.name}</h1>
          <h1>Email: {student.email}</h1>
          <NavLink to={`/campuses/${campus.id}`}>
            <h1>Campus: {campus.name}</h1>
          </NavLink>

        </div>
      }
    </div>
  );
}


const mapStateToProps = (state, ownProps) => {

  const studentId = Number(ownProps.match.params.id)
  return {
    student: state.students.find(student => student.id === studentId),
    campuses: state.campuses
  }
}


export default connect(mapStateToProps)(SingleStudent);

