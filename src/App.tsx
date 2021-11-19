import React from "react";
import AsteroidDetail from "./Components/AsteroidDetail";
import InputForm from "./Components/SearchAsteroid";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={InputForm} />
        <Route exact path="/AsteroidDetail" component={AsteroidDetail} />
      </Switch>
    </Router>
  );
}

export default App;
