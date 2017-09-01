import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import EditCampus from './EditCampus'

const SingleCampus = (props) => {

  const { campus, students } = props
  if (!campus) return <div />
  return (
    <div>
      <ul>
        <h3>{campus.name}</h3>
        <img className="media-object" src={campus.imageurl} height="300" width="500"/>
        <h3>STUDENTS</h3>
        {
          students.filter(student => student.campusId === campus.id)
            .map(student => {
              return (
                <ul key={student.id}>
                  <li >
                    <NavLink to={`/students/${student.id}`}>
                      <span> {student.name}</span>
                    </NavLink>
                  </li>
                </ul>

              );

            })
        }

       
        
      </ul>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {

  const campusId = Number(ownProps.match.params.id)
  return {
    campus: state.campuses.find(campus => campus.id === campusId),
    students: state.students
  }
}


export default connect(mapStateToProps)(SingleCampus);