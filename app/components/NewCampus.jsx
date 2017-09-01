import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postCampus } from '../reducers/campuses';

function NewCampus(props) {

    const {  handleSubmit } = props

    return (
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
                <button type="submit" className="btn btn-default">Create Campus</button>
            </div>
        </form>
    );
}


const mapStateToProps = function (state) {
    return {
    };
};



const mapDispatchToProps = function (dispatch) {
    return {
        handleSubmit(evt) {
            evt.preventDefault()
            const campus = {
                name: evt.target.campusName.value,
                campusurl: evt.target.campusImage.value
            }
            dispatch(postCampus(campus))
            evt.target.campusName.value = ''
            evt.target.campusImage.value = ''
            
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewCampus);