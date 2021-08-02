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

const Setautostatus = () => {
    const classes = useStyle()

    return (
        <div>
                
                <Box className={classes.Box}>

                    <Card>
                        <CardContent>

                                <Typography variant="h5" component="div">
                                    Initial Camper count
                                </Typography>

                                <form>


                            
                                    <TextField  
                                        label="Number of Camper" 
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
                            endIcon={<InputIcon/>}> Save</Button>

                        </CardActions>

                    </Card>  

                </Box>

        </div>
    )
}

export default Setautostatus


