import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

// const { Counter } = lazy(() => import("./features/counter/Counter"));
// const { User } = lazy(() => import("./features/users/User"));
const Counter = lazy(() =>
  import("./features/counter/Counter").then((module) => ({
    default: module.Counter,
  }))
);
const User = lazy(() =>
  import("./features/users/User").then((module) => ({
    default: module.User,
  }))
);
const Home = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <span>Hello World!</span>
      <span>
        Try go to <Link to="/counter">Counter</Link>
      </span>
      <span>
        Try go to <Link to="/user">User</Link>
      </span>
    </header>
  </div>
);
function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/counter" component={Counter} />
          <Route path="/user" component={User} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
