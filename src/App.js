import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Entry from './pages/entry/Entry.page'


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route exact path="/">
              <Entry />
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
