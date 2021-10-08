import React, {useState} from 'react'
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
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
import firebase from '../Config/FirebaseConfig'

import Firstpart from './Firstpart';

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

    

}))

const Entryform = () => {

    const classes = useStyle()
    
    return (

        <div>
                
                <Box className={classes.Box}>

                        <Firstpart mystyle={classes}/>

                </Box>

        </div>
    )
}

export default Entryform
