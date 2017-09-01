import axios from 'axios';


// ACTION TYPES
const ADD_CAMPUS = 'ADD_CAMPUS';
const GET_CAMPUSES = 'GET_CAMPUSES';
const EDIT_CAMPUS = 'EDIT_CAMPUS'
const REMOVE_CAMPUS = 'REMOVE_CAMPUS'

// ACTION CREATORS
export function addCampus (campus) {
  const action = { type: ADD_CAMPUS, campus };
  return action;
}

export function getCampuses (campuses) {
  const action = { type: GET_CAMPUSES, campuses };
  return action;
}

export function editCampus (campus) {
  const action = { type: EDIT_CAMPUS, campus };
  return action;
}
export function removeCampus (campus) {
  const action = { type: REMOVE_CAMPUS, campus };
  return action;
}
// THUNK CREATORS
export function fetchCampuses () {

  return function thunk (dispatch) {
    return axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => {
        const action = getCampuses(campuses);
        dispatch(action);
      });
  };
}

export function postCampus (campus) {

  return function thunk (dispatch) {
    return axios.post('/api/campuses', campus)
      .then(res => res.data)
      .then(newcampus => {
        dispatch(addCampus(newcampus));
        
      });
  };
}

export function updateCampus (id, campus) {
  return function thunk (dispatch) {
    return axios.put(`/api/campuses/${id}`, campus)
      .then(res => res.data)
      .then(newcampus => {
        dispatch(editCampus(newcampus));
        
      });
  };
}

export function deleteCampus (campus) {
  return function thunk (dispatch) {
   
   axios.delete(`/api/campuses/${campus.id}`)
   .then(dispatch(removeCampus(campus)))
      
  };
}
// REDUCER
export default function reducer (campuses = [], action) {

  switch (action.type) {

    case GET_CAMPUSES:
      return action.campuses;

    case ADD_CAMPUS:
      return [...campuses, action.campus]

    case EDIT_CAMPUS:
      return campuses.map(campus => 
        action.campus.id === campus.id ? action.campus : campus)

      case REMOVE_CAMPUS:

      return campuses.filter(campus => campus.id !== action.campus.id)

    default:
      return campuses;
  }

}