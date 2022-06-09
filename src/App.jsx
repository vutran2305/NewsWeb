import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import LoginPage from "./pages/login/Login";
import Register from "./pages/register/Register";
import Single from "./pages/single/Single";
import TopicPage from "./pages/topic/Topic";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import { store } from "./store";
import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import SearchPage from "./pages/search";

function App() {
  const [isLogin, setIslogin] = useState(false);
  const handleLogin = () => {
    setIslogin(!isLogin);
  };
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Topbar isLogin={isLogin} handleLogin={handleLogin} />
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <LoginPage handleLogin={handleLogin} />
            </Route>
            <Route path="/post/:id">
              <Single />
            </Route>
            <Route path="/topic/:id">
              <TopicPage />
            </Route>
            <Route exact path="/search/:id">
              <SearchPage />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;