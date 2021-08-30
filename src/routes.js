import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import HowToUse from './components/HowToUse';
import Login from './components/Login';


export default
 (<Switch>
     <Route exact path = '/' component={Homepage}/>
     <Route path = '/login' component={ Login }/>
     <Route path="/how-to-use" component={ HowToUse } />
 </Switch>)