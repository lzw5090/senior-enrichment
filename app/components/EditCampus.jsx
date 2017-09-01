import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCampus } from '../reducers/campuses';
import { deleteStudent } from '../reducers/students';

const EditCampus = (props) => {

  const { campus, students, handleSubmit, handleClick } = props
  if (!campus) return <div />
  return (
    <div>
      <ul>
      <h3>{campus.name}</h3>
      <img className="media-object" src={campus.imageurl} />
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    className="form-control"
                    type="text"
                    name="campusName"
                    placeholder="Enter campus name"
                />
            </div>
            <div className="form-group">
                <label htmlFor="image">Image</label>
                <input
                    className="form-control"
                    type="text"
                    name="campusImage"
                    placeholder="Enter image file path"
                />
            </div>
           
            <div className="form-group">
                <button type="submit" className="btn btn-default">Edit Campus</button>
            </div>
        </form>

        {
          students.filter(student => student.campusId === campus.id)
            .map(student => {
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

const mapDispatchToProps = function (dispatch, ownProps) {
    const campusId = Number(ownProps.match.params.id)
    return {
        handleSubmit(evt) {
            evt.preventDefault()
            const campus = {
                name: evt.target.campusName.value,
                imageurl: evt.target.campusImage.value
            }
            dispatch(updateCampus(campusId, campus))
            evt.target.campusName.value = ''
            evt.target.campusImage.value = ''
            
        },
        handleClick(studentId){
            dispatch(deleteStudent(studentId))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditCampus);