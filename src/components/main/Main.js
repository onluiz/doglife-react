import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home/Home';
import About from '../about/About';
import AddDogCard from '../../containers/addDogCard/AddDogCard';
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route exact path='/dogs/add' component={AddDogCard}/>
    </Switch>
  </main>
)

export default Main
