import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import PostDetails from './components/PostDetails/PostDetails';


function App() {
  return (
    <div>
        <Router>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/postdetails/:id">
              <PostDetails></PostDetails>
            </Route>
            <Route exact path="/">
            < Home></Home>
            </Route>
            <Route path="*"> 
              <NoMatch></NoMatch>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
