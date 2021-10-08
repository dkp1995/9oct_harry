import React, {useState, useEffect} from 'react'
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

import Thirdpart from './Thirdpart';


const Secondpart = (props) => {

    // const [info, setInfo] = useState({

    //                     todayprice:"",
    //                     pending:"", 
    //                     advance:"", 
    //                     total:"", 
    //                     campertocollect:"",
    //                     disposaltocollect:"",
    //                     disposalhold:"",
    //                     camperhold:"",
    //                     updateAdavance:"",
    //                     area:"",
    //                     customername:"",
    //                     noofcamp:"",
    //                     noofdispo:"",
    //                     id:"",

    //                     // todayprice:props.data,
    //                     // pending:props.pending, 
    //                     // advance:props.advance, 
    //                     // total:props.totalPaid, 
    //                     // campertocollect:props.campcollect,
    //                     // disposaltocollect:props.dispocollect,
    //                     // disposalhold:props.disposalhold,
    //                     // camperhold:props.camperhold,
    //                     // updateAdavance:props.updateAdavance,
    //                     // area:props.area,
    //                     // customername:props.custname,
    //                     // noofcamp:props.noofcamp,
    //                     // noofdispo:props.noofdispo,
    //                     // id:props.id,

    // })

    //useEffect(() => {

        // setInfo({

        //     todayprice:props.data,
        //     pending:props.pending, 
        //     advance:props.advance, 
        //     total:props.totalPaid, 
        //     campertocollect:props.campcollect,
        //     disposaltocollect:props.dispocollect,
        //     disposalhold:props.disposalhold,
        //     camperhold:props.camperhold,
        //     updateAdavance:props.updateAdavance,
        //     area:props.area,
        //     customername:props.custname,
        //     noofcamp:props.noofcamp,
        //     noofdispo:props.noofdispo,
        //     id:props.id,
        // })

        
    //}, [])

    console.log(props)

    return (
        <div>
                
                    <Card>

                        <hr/> <hr/> 

                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                
                            <CardContent>

                                    <Typography variant="h5" component="div">
                                        Summary
                                    </Typography>
                                        
                                    <List>
                                            <ListItem>Today's price : {props.data}</ListItem>
                                            <ListItem>Pending amount : {props.pending} </ListItem>
                                            <ListItem>Advance amount : {props.advance}</ListItem>
                                            <ListItem><h2>Total amount : {props.total} </h2></ListItem>
                                            <ListItem>Camper to collect : {props.campertocollect}</ListItem>
                                            <ListItem>Disposal to collect : {props.disposaltocollect}</ListItem>
                                    </List>

                            </CardContent>       
                            
                            </Grid>
                        </Grid> 

                    </Card>   


                    <Thirdpart 
                    
                    todayprice={props.data}
                    pending={props.pending} 
                    advance={props.advance} 
                    total={props.total} 
                    campertocollect={props.campertocollect}
                    disposaltocollect={props.disposaltocollect}
                    disposalhold={props.disposalhold}
                    camperhold={props.camperhold}
                    updateAdavance={props.updateAdavance}
                    area={props.area}
                    customername={props.customername}
                    noofcamp={props.noofcamp}
                    noofdispo={props.noofdispo}
                    id={props.id}
                    advanceused={props.advanceused}/> 

            
        </div>
    )
}

export default Secondpart
