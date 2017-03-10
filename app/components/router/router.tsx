import * as React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import DashboardEdit from '../views/dashboard-edit/dashboard-edit'

export default
  <Router history={hashHistory}>
    <Route path="/">
      <IndexRoute component={DashboardEdit} />
      <Route path="dashboard/edit" component={DashboardEdit} />
    </Route>
  </Router>