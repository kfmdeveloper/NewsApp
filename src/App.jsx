import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route
              exact
              key="general"
              path="/"
              element={
                <News PageSize={30} textMode="General" category="general" />
              }
            />
            <Route
              exact
              path="/technology"
              key="technology"
              element={
                <News
                  PageSize={10}
                  textMode="Technology"
                  category="technology"
                />
              }
            />
            <Route
              exact
              path="/business"
              key="business"
              element={
                <News PageSize={10} textMode="Business" category="business" />
              }
            />
            <Route
              exact
              path="/health"
              key="health"
              element={
                <News PageSize={10} textMode="Health" category="health" />
              }
            />
            <Route
              exact
              path="/science"
              key="science"
              element={
                <News PageSize={10} textMode="Science" category="science" />
              }
            />
            <Route
              exact
              path="/sports"
              key="sports"
              element={
                <News PageSize={10} textMode="Sports" category="sports" />
              }
            />
            <Route
              exact
              path="/entertainment"
              key="entertainment"
              element={
                <News
                  PageSize={10}
                  textMode="Entertainment"
                  category="entertainment"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
