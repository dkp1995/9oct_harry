import React from 'react'
import Box from '@material-ui/core/Box';


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputIcon from '@material-ui/icons/Input';

import firebase from '../Config/FirebaseConfig';


const useStyle = makeStyles((theme)=>({

    Box:{

        width: "30% ",
        height: "auto",

        [theme.breakpoints.down('md')]: {
            
            width: "100%",
            
          },
        
    },
    paper:{

        

        [theme.breakpoints.down('md')]: {
            
            padding: theme.spacing(0, 0, 0, 2),
            
          },

    },

    item:{

        padding: theme.spacing(3, 0, 0, 2),
    }

}))

const Logout = () => {
    const classes = useStyle()


    // handles what happens when user click the logout button
    const loggedout = (e) =>{
        e.preventDefault();

        firebase.auth().signOut()
    }


    return (
        <div>
                
                <Box className={classes.Box}>

                    <Card>
                        <CardContent>

                                <Typography variant="h5" component="div">
                                    Are you sure you want to logout ?
                                </Typography>

                              
                               

                                  


                          

                        </CardContent>

                        <CardActions>

                        <Button 
                            variant="contained" 
                            color="error" 
                            size="large" 
                            endIcon={<InputIcon/>}
                            onClick={loggedout}> Logout</Button>


                        </CardActions>

                     

                    </Card>  

                </Box>

        </div>
    )
}

export default Logout


