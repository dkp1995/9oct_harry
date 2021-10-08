import React, {useState} from 'react'
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputIcon from '@material-ui/icons/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { FormControl } from '@material-ui/core';
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
    },

    btn : {

       
        width:"50%"
    },

    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },

}))

const Addnewcustomer = () => {
    const classes = useStyle()

    const [inputdata, setInputData] = useState({

            customername: "",
            phonenumber: "",
            disposalrate: 0,
            camperrate: 0,
            address: "",
            deposit: "",
            area: "",
            frequency: "",
            timestamp: Date.now(),
            customerid: new Date().getMilliseconds(),
            advance:'0',
            pending:'0',
            camperhold:'0',
            disposalhold:'0'
    });


   

   

    const changeHandler = (event) => {

        const value = event.target.value
        const name = event.target.name

        setInputData({...inputdata, [name]:value});

       
    };

 

    const submitHandler = (event) => {

        event.preventDefault()

    
        console.log(inputdata)

        firebase.firestore().collection('customerData').add(inputdata)


    }

    return (
        <div>
                
                <Box className={classes.Box}>

                    <Card>

                        <form onSubmit={submitHandler}>
                        <CardContent>

                                <Typography variant="h5" component="div">
                                    Add a new customer  
                                </Typography>

                                


                            
                                    <TextField  
                                        label="Customer Name" 
                                        name="customername"
                                        id="fullWidth" 
                                        variant="outlined"
                                        margin="dense"
                                        required
                                        onChange={changeHandler}/>

                                    <TextField  
                                        label="Phone Number" 
                                        name="phonenumber"
                                        id="fullWidth" 
                                        variant="outlined"
                                        margin="dense"
                                        required
                                        type="number"
                                        onChange={changeHandler}/>

                                    <TextField  
                                        label="Disposal Rate" 
                                        name="disposalrate"
                                        id="fullWidth" 
                                        variant="outlined"
                                        margin="dense"
                                        type="number"
                                        onChange={changeHandler}/>

                                    <TextField  
                                        label="Camper Rate"
                                        name="camperrate" 
                                        id="fullWidth" 
                                        variant="outlined"
                                        margin="dense"
                                        type="number"
                                        onChange={changeHandler}/>

                                    <TextField  
                                        label="Address" 
                                        name="address"
                                        id="fullWidth" 
                                        variant="outlined"
                                        margin="dense"
                                        onChange={changeHandler}/>

                                    <TextField  
                                        label="Deposit" 
                                        name="deposit"
                                        id="fullWidth" 
                                        variant="outlined"
                                        margin="dense"
                                        onChange={changeHandler}/>


                                    <TextField  
                                        label="Area" 
                                        name="area"
                                        id="fullWidth" 
                                        variant="outlined"
                                        margin="dense"
                                        onChange={changeHandler}/>

                                       

                                    <TextField
                                            id="standard-full-width"
                                            select
                                            fullWidth
                                            label="Frequency"
                                            name="frequency"
                                            variant="outlined"
                                            margin="dense"
                                            onChange={changeHandler}
                                            
                                            
                                    > 

                                        <MenuItem value="Daily">Daily</MenuItem>
                                        <MenuItem value="Alternate">Alternate</MenuItem>

                                    </TextField>                

                              

                        </CardContent>

                        <CardActions>

                            <Button 
                            type="submit"
                            variant="contained"
                            className={classes.btn} 
                            color="error" 
                            size="large " 
                            endIcon={<InputIcon/>}
                            > Save</Button>

                        </CardActions>

                        </form>

                    </Card>  

    



                </Box>

        </div>
    )
}

export default Addnewcustomer
