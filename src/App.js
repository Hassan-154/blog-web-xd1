import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Blog from './Blog';
import Contact from './Contact';
import SignUp from './SignUp';

function App() {
  return (
    <div className="app">
      <Router>
      <NavBar/>
        <Switch>
          <Route path="/about"><About/></Route>
          <Route path="/contact"><Contact/></Route>
          <Route path="/blog"><Blog/></Route>
          <Route path="/signup"><SignUp/></Route>
          <Route path="/"><Home/></Route>
        </Switch>
      </Router>
      </div>
      
  )
}

export default App;
