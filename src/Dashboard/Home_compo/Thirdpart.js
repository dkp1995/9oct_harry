import React, {useState, useEffect} from 'react'
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import InputIcon from '@material-ui/icons/Input';
import firebase from '../Config/FirebaseConfig'
import moment from 'moment';

const Thirdpart = (props) => {

    const [finalInput, setFinalInput] = useState({

        paymentreceived: "",
        noofcamper: "0",
        noofdisposal: "0",
        
    });

    const changeHandler = (event) => {

        const value = event.target.value 
        const name = event.target.name           

        setFinalInput({...finalInput, [name]:value});   

    }

 // ==============================================================================   

    // const { customername, area, id } = props

    // const [rawdata, setRawdata] = useState(customername)
    // const [myid, setId] = useState(id)

    // useEffect(() => {
    //     setRawdata(customername+"hello world");
    //   }, [customername]);

    // useEffect(() => {
    //     setId(id+"hello India");
    //   }, [id]);  


    // const [full, setFull]  = useState({

    //         customername : "",
    //         id: ""
    // }) 
    

    // useEffect(() => {
        
    //     setRawdata({ ...rawdata,

    //         customername: props.customername,
    //         camper: props.noofcamp,
    //         disposal: props.noofdispo,
    //         camperreturn: finalInput.noofcamper ,
    //         disposalreturn: finalInput.noofdisposal,
    //         paymentreceived: props.total,
    //         advancereceived: "",
    //         advanceused: "",
    //         pendingreceived:"",
    //         pendingcreated: "",
    //         area: props.area,
    //         timestamp: Date.now(),
    //         Entryby: "Dileep@pal",

    //     })

    // }, [])

    // const [updatedData , setUpdatedData] = useState({

    //     camperhold: "",
    //     disposalhold: "",
    //     advance : "",
    //     pending : ""
    // })

//==========================================================================================

    const submitHandler2 = (event) => {

        event.preventDefault()

        var pendingcre = 0
        var advancerec = 0

        var pendingrec = 0

        const paymentreceived = props.total - props.pending

        if(finalInput.paymentreceived<props.total){
             pendingcre = props.total - finalInput.paymentreceived

             pendingrec = finalInput.paymentreceived - props.data
            
        }

        if(finalInput.paymentreceived>props.total){
              advancerec = finalInput.paymentreceived - props.total

              pendingrec = props.pending
        }

        

        
        

        firebase.firestore().collection('rawData').add({
            
            customername: props.customername, 
            camper: props.noofcamp, 
            disposal: props.noofdispo, 
            camperreturn: finalInput.noofcamper , 
            disposalreturn: finalInput.noofdisposal, 

            paymentreceived: paymentreceived, 
            advancereceived: advancerec, 
            advanceused: props.advanceused,    
            pendingreceived: pendingrec, 
            pendingcreated: pendingcre,    
            
            area: props.area,
            timestamp: Date.now(),
            Entryby: "dileep",
        })


        const camp = props.noofcamp - finalInput.noofcamper
        const dispo = props.noofdispo - finalInput.noofdisposal

        const camphold  = props.camperhold + camp
        const dispohold = props.disposalhold + dispo


        firebase.firestore().collection('customerData').doc(props.id).update({

                advance:advancerec,
                pending:pendingcre,
                camperhold: camphold,
                disposalhold:dispohold
            })

    }

    return (
        <div>


            <Card>
                <hr/> <hr/> 

                    <form onSubmit={submitHandler2}>

                        <CardContent>

                                <TextField  
                                        label="Payment Received" 
                                        id="fullWidth" 
                                        name="paymentreceived"
                                        variant="outlined"
                                        margin="dense"
                                        onChange={changeHandler}/>

                                      

                                    <TextField  
                                        label="Camper Returned" 
                                        id="fullWidth"
                                        name="noofcamper" 
                                        variant="outlined"
                                        margin="dense"
                                        onChange={changeHandler}/>

                                    <TextField  
                                        label="Disposal Returned" 
                                        id="fullWidth" 
                                        variant="outlined"
                                        margin="dense"
                                        name="noofdisposal"
                                        onChange={changeHandler}/>  

                        </CardContent>

                        <CardActions>

                            <Button 
                            variant="contained" 
                            color="secondary" 
                            size="small"
                            type="submit" 
                            endIcon={<InputIcon/>}> Submit</Button>

                        </CardActions>

                    </form>    

            </Card>  
            
        </div>
    )
}

export default Thirdpart
