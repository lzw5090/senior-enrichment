import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postStudent } from '../reducers/students';

function NewStudent(props) {

    const {  handleSubmit, campuses } = props

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
                    placeholder="Enter student email"
                />
            </div>
            <div className="form-group">
                <label htmlFor="name">Select a campus</label>
                <select
                    name="campus"
                    placeholder="pick a campus">
                    {
                        campuses && campuses.map((campus) => 
                            <option key={campus.name} value={campus.id}>
                                {campus.name}
                            </option>)
                    }
                </select>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-default">Create Student</button>
            </div>
        </form>
    );
}


const mapStateToProps = function (state) {
    return {
        campuses: state.campuses
    };
};



const mapDispatchToProps = function (dispatch) {
    return {
        handleSubmit(evt) {
            evt.preventDefault()
            const student = {
                name: evt.target.studentName.value,
                email: evt.target.studentEmail.value,
                campusId: evt.target.campus.value
            }
            console.log(student)
            dispatch(postStudent(student))
            evt.target.studentName.value = ''
            evt.target.studentEmail.value = ''
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewStudent);