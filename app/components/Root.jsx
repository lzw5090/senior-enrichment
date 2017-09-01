import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home'
import Navbar from './Navbar'
import AllCampuses from './AllCampuses'
import AllStudents from './AllStudents'
import SingleCampus from './SingleCampus'
import SingleStudent from './SingleStudent'
import EditStudent from './EditStudent'
import EditCampus from './EditCampus'
import NewStudent from './NewStudent'
import NewCampus from './NewCampus'
import store from '../store'
import { fetchStudents} from '../reducers/students'
import { fetchCampuses} from '../reducers/campuses'

export default class Root extends Component {

  componentDidMount () {
    const studentsThunk = fetchStudents();
    const campusesThunk = fetchCampuses();
    store.dispatch(studentsThunk);
    store.dispatch(campusesThunk);
  }


  render () {
    return (
      <Router >
      <div>
      <Navbar />
        <main>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/campuses" component={AllCampuses} />
          <Route exact path="/campuses/add" component={NewCampus} />
          <Route exact path="/students" component={AllStudents} />
          <Route exact path="/students/add" component={NewStudent} />
          <Route exact path="/campuses/:id" component={SingleCampus} />
          <Route exact path="/students/:id" component={SingleStudent} />
          {/* <Route path="/students/:id/edit" component={EditStudent} /> */}
          <Route path={`/campuses/:id/edit`} component={EditCampus}  />
          <Route path={`/students/:id/edit`} component={EditStudent}  />
          <Route  component={Home} />
          </Switch>
        </main>
      </div>
      </ Router>
    );
  }
}

