import React from 'react'
import routes from '../constants/routes'
import { Route, Switch, Router } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
export default function Routing({ history }){
  return (
    <Router history={history}>
      <Switch>
        {
          routes.map(({ path, component, exact = false }) => (<Route component={component} exact={exact} key={'route-' + path} path={path}/>)
          )
        }
      </Switch>
    </Router>
  )
}
