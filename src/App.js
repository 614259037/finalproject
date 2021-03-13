import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./page/Searchpage"
import Profile from "./page/Profilepage"

function App() {
  return (
    <div className="App">
      <div id="black">
        <div className="__main">
          <Router>
            <Switch>
              <Route exact path="/" component={Search} />
              <Route path="/Search" component={Search} />
              <Route path="/Profile/:id" component={Profile} />
            </Switch>
          </Router>
        </div>
      </div></div>
  );
}

export default App;
