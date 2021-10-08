import React, {useState} from 'react'
import firebase from '../Config/FirebaseConfig';

import './Loginform.css'

const AdminLoginform = () => {

    // state variable to hold what user type on the login fields 
    const [login, setLogin] = useState({

        username:"",
        password:""
    })

    // handler to listen to change event in text fields 
    const changeHandler = (e) =>{

        setLogin({
            
                ...login,[e.target.name]:e.target.value,
                
        })
    }

   

    // handling login form submission 
    const submitHandler = (e) =>{

        e.preventDefault();

        firebase.auth().signInWithEmailAndPassword(login.username, login.password)
                .then((userCredential) => {
                    // Signed in
                    //var user = userCredential.user;
                    //alert(user+'logged in successfully')

                       
                    // ...
                })
                .catch((error) => {
                    //var errorCode = error.code;
                    //var errorMessage = error.message;
                });
    }

    return (
               
            <div class="container">
                <div class="vertical-center">

                    <div className="card">

                        <form onSubmit={submitHandler} className="form">
                            
                            <input type="text" name="username" placeholder="Enter Username" onChange={changeHandler} className="input"/>
                            <input type="password" name="password" placeholder="Enter Password" onChange={changeHandler} className="input"/>

                            <input type="submit" value="Login" className="btn"/>

                        </form>



                    </div>

                     
                </div>
            </div>

                
    )
}

export default AdminLoginform
