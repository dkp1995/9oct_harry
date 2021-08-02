import './App.css';

import Navbar from './Layout/Navbar';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'



import Home from './Components/Home';

import Report from './Components/Report';

import Customer from './Components/Customer'

import Other from './Components/Other';

function App() {
  return (
    <>
        <Router>
            <Navbar/>


            <Switch>
                  <Route path="/"  exact component={Home}/>
                  <Route path="/report"  component={Report}/>
                  <Route path="/customer"  component={Customer}/>
                  <Route path="/other"  component={Other}/>
                  
            </Switch>

        </Router>
            


            
    </>
  );
}

export default App;
