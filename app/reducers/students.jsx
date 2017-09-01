import axios from 'axios';


// ACTION TYPES
const ADD_STUDENT = 'ADD_STUDENT';
const GET_STUDENTS = 'GET_STUDENTS';
const EDIT_STUDENT = 'EDIT_STUDENT';
const REMOVE_STUDENT = 'REMOVE_STUDENT';
// ACTION CREATORS
export function addStudent (student) {
  const action = { type: ADD_STUDENT, student };
  return action;
}

export function getStudents (students) {
  const action = { type: GET_STUDENTS, students };
  return action;
}

export function editStudent (student) {
  const action = { type: EDIT_STUDENT, student };
  return action;
}
export function removeStudent (student) {
  const action = { type: REMOVE_STUDENT, student };
  return action;
}
// THUNK CREATORS
export function fetchStudents () {

  return function thunk (dispatch) {
    return axios.get('/api/students')
      .then(res => res.data)
      .then(student => {
        const action = getStudents(student);
        dispatch(action);
      });
  };
}

export function postStudent (student) {
  return function thunk (dispatch) {
    return axios.post('/api/students', student)
      .then(res => res.data)
      .then(newstudent => {
        dispatch(addStudent(newstudent));
        
      });
  };
}

export function updateStudent (id, student) {
  return function thunk (dispatch) {
    return axios.put(`/api/students/${id}`, student)
      .then(res => res.data)
      .then(newstudent => {
        dispatch(editStudent(newstudent));
        
      });
  };
}

export function deleteStudent (student) {
  return function thunk (dispatch) {
   
     axios.delete(`/api/students/${student.id}`)
     .then(dispatch(removeStudent(student)))
     
      
        
      
  }
}
// REDUCER
export default function reducer (students = [], action) {

  switch (action.type) {

    case GET_STUDENTS:
      return action.students;

    case ADD_STUDENT:
      return [...students, action.student];

    case EDIT_STUDENT:
      return students.map(student => action.student.id === student.id ? action.student : student)

    case REMOVE_STUDENT:
      return students.filter(student => student.id !== action.student.id);

    default:
      return students;
  }

}