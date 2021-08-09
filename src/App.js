import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import data from "./data.json";
import Single from "./Single";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home data={data} />
          </Route>
          <Route path="/countries/:name">
            <Single data={data} />
          </Route>
        </Switch>
      </div>
      <h5>&copy; 2021 Adem Alagoz</h5>
    </Router>
  );
}

export default App;
