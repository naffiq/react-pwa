import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "semantic-ui-css/semantic.min.css";
import Users from "./pages/Users";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Users} />
      </Router>
    );
  }
}

export default App;
