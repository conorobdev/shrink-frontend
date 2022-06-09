import './App.css';
import Home from './Home';
import Redirect from './redirect';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/sk/:id" element={<Redirect />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
