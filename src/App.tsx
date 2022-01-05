import React from 'react';import logo from './logo.svg';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import SearchAsteroid from './Components/SearchAsteroid'
import AsteroidDetail from './Components/AsteroidDetail'
function App() {
  return (
   <BrowserRouter>
   <h2 style={{textAlign:'center'}}> Nasa Asteroid Detail App </h2>
    <Switch>
    <Route exact path='/' component={SearchAsteroid} />
    <Route exact path='/AsteroidDetail' component ={AsteroidDetail} />
    </Switch>

    </BrowserRouter> 
  );
}

export default App;
