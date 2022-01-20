import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './pages/Home';
import About from './pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
    </div>
  </Router>
  );
}

export default App;
