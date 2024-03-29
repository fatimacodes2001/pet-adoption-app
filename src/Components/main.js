/*global React ReactDOM*/

import React from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { StrictMode } from "react/cjs/react.production.min";
import Details from "./Details";

const App = () => {
  return (
    <div>
      <Router>
        <header>
          <Link to="/"> Adopt Me </Link>
        </header>

        <Switch>
          <Route path="/details/:id">
            <Details />
          </Route>

          <Route path="/">
            <SearchParams />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
