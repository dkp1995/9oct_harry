import React from 'react'
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputIcon from '@material-ui/icons/Input';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';

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
    }

}))

const Addnewcustomer = () => {
    const classes = useStyle()

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };

    return (
        <div>
                
                <Box className={classes.Box}>

                    <Card>
                        <CardContent>

                                <Typography variant="h5" component="div">
                                    Add a new customer  
                                </Typography>

                                <form>


                            
                                    <TextField  
                                        label="Customer Name" 
                                        id="fullWidth" 
                                        variant="outlined"
                                        margin="dense"
                                        required/>

                                    <TextField  
                                        label="Phone Number" 
                                        id="fullWidth" 
                                        variant="outlined"
                                        margin="dense"
                                        required
                                        type="number"/>

                                    <TextField  
                                        label="Disposal Rate" 
                                        id="fullWidth" 
                                        variant="outlined"
                                        margin="dense"/>

                                    <TextField  
                                        label="Camper Rate" 
                                        id="fullWidth" 
                                        variant="outlined"
                                        margin="dense"/>

                                    <TextField  
                                        label="Address" 
                                        id="fullWidth" 
                                        variant="outlined"
                                        margin="dense"/>

                                    <TextField  
                                        label="Deposit" 
                                        id="fullWidth" 
                                        variant="outlined"
                                        margin="dense"/>


                                    <TextField  
                                        label="Area" 
                                        id="fullWidth" 
                                        variant="outlined"
                                        margin="dense"
                                        />

                                </form>

                        </CardContent>

                        <CardActions>

                            <Button 
                            variant="contained"
                            className={classes.btn} 
                            color="error" 
                            size="large " 
                            endIcon={<InputIcon/>}
                            > Save</Button>

                        </CardActions>

                    </Card>  

    



                </Box>

        </div>
    )
}

export default Addnewcustomer
