import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateStudent } from '../reducers/students';

function EditStudent(props) {

    const {  handleSubmit, campuses, student } = props
    if(!student) return <div />

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    className="form-control"
                    type="text"
                    name="studentName"
                    
                    placeholder="Enter student name"
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    className="form-control"
                    type="email"
                    name="studentEmail"
                    value={student.email}
                    placeholder="Enter student email"
                    disabled
                />
            </div>
            <div className="form-group">
                <label htmlFor="name">Select a campus</label>
                <select
                    name="campus"
                    placeholder="pick a campus">
                    {
                        campuses && campuses.map((campus) => 
                            <option key={campus.name} value={campus.id} >
                                {campus.name}
                            </option>)
                    }
                </select>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-default">Edit Student</button>
            </div>
        </form>
    );
}


const mapStateToProps = function (state, ownProps) {
  const studentId = Number(ownProps.match.params.id)
    return {
        campuses: state.campuses,
        student: state.students.find(student => student.id === studentId)
    };
};



const mapDispatchToProps = function (dispatch, ownProps) {
  const studentId = Number(ownProps.match.params.id)
    return {
        
        handleSubmit(evt) {
            evt.preventDefault()
            const student = {
                name: evt.target.studentName.value,
                email: evt.target.value,
                campusId: evt.target.campus.value
            }
        
            dispatch(updateStudent(studentId, student))
            
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditStudent);