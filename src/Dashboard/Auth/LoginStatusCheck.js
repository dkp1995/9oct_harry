import React, {useState, useEffect} from 'react';
import firebase from '../Config/FirebaseConfig';
import AdminDashboard from '../AdminDashboard';
import AdminLoginform from './AdminLoginform';
import Dashboard from '../AdminDashboard';

const LoginStatusCheck = () => {

        const [islogged, setIslogged] = useState();

       useEffect(() => {
           
            firebase.auth().onAuthStateChanged((user) => {
    

                console.log("hello from loginSTatuscheck ")
                
                setIslogged(user)
            
            })

       }, [])

        return islogged == null ? <AdminLoginform/> : <Dashboard/>
}

export default LoginStatusCheck
