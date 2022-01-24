import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Support from './pages/Support';
import Instructions from './pages/Instructions';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter as Router, Route, Routes} from 'react-router-dom';

function App() {

  return (
      <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/support" element={<Support/>}/>
            <Route path="/instructions/:id" element={<Instructions/>}/>
          </Routes>
        </div>
      </div>
      </Router>
  );
}

export default App;
