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
    }

}))

const Entryform = () => {

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
                                    Delivery Entry Form
                                </Typography>

                                <form>


                            
                                    <TextField  
                                        label="Customer Name" 
                                        id="fullWidth" 
                                        variant="outlined"
                                        margin="dense"/>

                                    <TextField  
                                        label="No of Camper" 
                                        id="fullWidth" 
                                        variant="outlined"
                                        margin="dense"
                                        type="number"/>

                                    <TextField  
                                        label="No of Disposal" 
                                        id="fullWidth" 
                                        variant="outlined"
                                        margin="dense"
                                        type="number"/>


                                </form>

                        </CardContent>

                        <CardActions>

                            <Button 
                            variant="contained" 
                            color="error" 
                            size="small" 
                            endIcon={<InputIcon/>}> Calculate</Button>

                        </CardActions>

                    </Card>  

    {/* ========================================================================== */}
                     <Card>

                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    
                                <CardContent>

                                        <Typography variant="h5" component="div">
                                            Summary
                                        </Typography>
                                            
                                        <List>
                                                <ListItem>Today's price : </ListItem>
                                                <ListItem>Pending amount : </ListItem>
                                                <ListItem>Advance amount :</ListItem>
                                                <ListItem>Total Paid :</ListItem>
                                                <ListItem>Camper to collect :</ListItem>
                                                <ListItem>Disposal to collect :</ListItem>
                                        </List>

                                 </CardContent>       
                                
                                </Grid>
                            </Grid> 

                    </Card>   

      {/* ========================================================================== */}


      <Card>
                        <CardContent>

                                

                                <form>


                            
                                    <TextField  
                                        label="Payment Received" 
                                        id="fullWidth" 
                                        variant="outlined"
                                        margin="dense"/>

                                      

                                    <TextField  
                                        label="Camper Returned" 
                                        id="fullWidth" 
                                        variant="outlined"
                                        margin="dense"/>

                                    <TextField  
                                        label="Disposal Returned" 
                                        id="fullWidth" 
                                        variant="outlined"
                                        margin="dense"/>  


                                </form>

                        </CardContent>

                        <CardActions>

                            <Button 
                            variant="contained" 
                            color="error" 
                            size="small" 
                            endIcon={<InputIcon/>}> Submit</Button>

                        </CardActions>

                    </Card>  



                </Box>

        </div>
    )
}

export default Entryform
