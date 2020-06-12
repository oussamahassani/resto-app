import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//components
import {PlatContainer} from './components';
import {Login} from './components'
import {Signup} from './components'
import {Mycard} from './components'
import {AddPlat} from './components'
import {ModifierPlat} from './components'
import  {Order} from './components'
import {User} from './components'
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"
import Updateuser from './components/gestionuser/updateuser'
import {Ratinguser} from './components'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
   <Switch>
     <Route exact path='/'><PlatContainer/></Route>
    <Route exact path='/card'><Mycard/>  </Route>
     <Route exact path='/login' component={Login}/>
   <Route exact path="/cards"><AddPlat/></Route>  
     <Route exact path="/signup"><Signup/></Route>
     <Route exact path="/modifier"><ModifierPlat/></Route>
     <Route exact path="/order"><Order/></Route>
     <Route exact path="/gestion-user"><User/></Route>
     <Route exact path="/update-user"><Updateuser/></Route>
     <Route exact path="/rating-user"><Ratinguser/></Route>
   </Switch>
 </Router>
    </Provider>
  );
}

export default App;
