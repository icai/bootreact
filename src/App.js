import React from 'react';
import routers from './routers';
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
import './app.less'

const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      { routers }
    </ConnectedRouter>
  )
}

App.propTypes = {
  history: PropTypes.object,
}

export default App
