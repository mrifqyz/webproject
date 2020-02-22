import React from 'react';
import Navbar from './components/layout/Navbar';
import Landing from './components/pages/Landing';
import Portofolio from './components/pages/Portofolio';
import About from './components/pages/About';
import Contact from './components/pages/Contact'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/css/main.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing}/>
        </Switch>
        {/* <Switch>
          <Route exact path="/portofolio" component={Portofolio} />
        </Switch> */}
        <Switch>
          <Route exact path="/about" component={About}/>
        </Switch>
        <Switch>
          <Route exact path="/contact" component={Contact}/>    
        </Switch>
      </div>

    </Router>
  );
}

export default App;
