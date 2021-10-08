import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import HomePage from './Home/HomePage';

import LoginStatusCheck from './Dashboard/Auth/LoginStatusCheck';

import Order from './Home/Order'
import Contactus from './Home/Contactus'


function App() {

    return (
      <>
          <Router>
             
               <Switch>
                    
                    <Route path="/"  exact component={HomePage}/>
                    <Route path="/order"  exact component={Order}/>
                    <Route path="/contact"  exact component={Contactus}/>

                    <Route path="/admin"  exact component={LoginStatusCheck}/>


                 
                    
                </Switch>
  
          </Router>
              
  
  
              
      </>
    );

       
}

  


export default App;
