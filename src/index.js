import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import MainPage from './containers/MainPage';
import Bill from './containers/Bill';
import Bills from './containers/Bills';
import QueryById from './containers/QueryById';
import configureStore from './store/configStore';
import Subscription from './containers/Subscription';
import Auth from './containers/Auth';
import Checkoff from './containers/Checkoff';
import Transfer from './containers/Transfer';
import OfflineStatus from './containers/OfflineStatus';
import './css/style.css';



//react-router
import {Router, Route, IndexRoute,browserHistory} from 'react-router'

const store = configureStore()

render(
  <Provider store={store}>
    <Router  history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={MainPage}/>
        <Route path="/bill/:channel" component={Bill}/>
        <Route path="/bills/:type/:channel" component={Bills}/>
        <Route path="/QueryById/:id/:type" component={QueryById}/>
        <Route path="/Subscription/:type" component={Subscription}/>
        <Route path="/auth" component={Auth}/>
        <Route path="/Checkoff" component={Checkoff}/>
        <Route path="/Transfer/:channel" component={Transfer}/>
        <Route path="/OfflineStatus/:channel/:billNo" component={OfflineStatus}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)