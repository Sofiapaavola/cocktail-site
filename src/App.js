import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Support from './pages/Support';
import Instructions from './pages/Instructions';
import JsonServerTest from './pages/JsonServerTest';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';

function App() {

  return (
      <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/about">
              <About/>
            </Route> 
            <Route path="/support">
              <Support/>
            </Route>
            <Route path="/instructions/:id">
              <Instructions/>
            </Route>
            <Route path="/json">
              <JsonServerTest/>
            </Route>
          </Switch>
        </div>
      </div>
      </Router>
  );
}

export default App;
