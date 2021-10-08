import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import AdminHome from './AdminHome';

import Report from './Report';

import Customer from './Customer'

import Other from './Other';

import Navbar from './Layout/Navbar';

const Dashboard = () => {



    return (

        <>

            <Router>
                        
                <Navbar/>
            
                <Switch>

                    <Route path="/admin/"  exact component={AdminHome}/>
                    <Route path="/admin/report"  component={Report}/>
                    <Route path="/admin/customer"  component={Customer}/>
                    <Route path="/admin/other"  component={Other}/>

                </Switch>
                
            </Router>

        </>


    )
}

export default Dashboard 
