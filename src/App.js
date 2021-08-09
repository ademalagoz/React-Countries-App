import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import data from "./data.json";
import Single from "./Single";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState } from "react";

function App() {
  const [countries, setCountries] = useState(data);
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home countries={countries} setCountries={setCountries} />
          </Route>
          <Route path="/countries/:name">
            <Single data={data} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
