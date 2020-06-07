import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//components
import PlatContainer from './components/PlatContainer';
import Login from './components/login/Login'
import Signup from './components/signup/Signup'
import Mycard from './components/listecaarde/mycard'
import AddPlat from './components/addplat/add'
import ModifierPlat from './components/Modifierpalt/ModifierPlat'
import Order from './components/Order/Order'
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
   </Switch>
 </Router>
    </Provider>
  );
}

export default App;
