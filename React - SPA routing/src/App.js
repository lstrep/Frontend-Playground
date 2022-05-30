import Navigationbar from './Navigationbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import TripDetails from './TripDetails';
import NotFound404 from './NotFound404';


function App() {
  return (
    <Router>
      <div className="App">
        <Navigationbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            
            <Route path="/create">
              <Create />
            </Route>


            <Route path="/trips/:id">
              <TripDetails />
            </Route>
            
            <Route path="*"> {/*any other path than those specified is 404 */}
              <NotFound404/> 
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;