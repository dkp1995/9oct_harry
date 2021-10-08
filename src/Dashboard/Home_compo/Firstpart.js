import React, {useState, useEffect} from 'react'
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputIcon from '@material-ui/icons/Input';
import Autocomplete from '@material-ui/lab/Autocomplete';

import firebase from '../Config/FirebaseConfig'

import Secondpart from './Secondpart';

const Firstpart = (props) => {

// =================getting customer name for the dropdown========================    

    const [mydata, setMydata] = useState([])

    const [display, setDisplay] = useState(false)
    const [search, setSearch] = useState('')

    useEffect(() => {

        const fetchdata = async () => {

            firebase.firestore().collection('customerData').get().then((snapshot) => {

                const rows = [];
        
                snapshot.docs.forEach(doc =>{
              
                  rows.push({...doc.data(), id:doc.id})
                  
        
                })
        
                setMydata(rows)
              }) 

        }

        fetchdata()

    }, [])

    
    
    

//============================ form input change handling and state declaration =====================


        const [firstInput, setFirstInput] = useState({

            customername: "",
            noofcamper: "0",
            noofdisposal: "0",
            
        });

        const [price, setPrice] = useState()
        
        const [pending , setPending] = useState()
        const [advance , setAdvance] = useState()
        const [totalPaid , setTotalPaid] = useState()

        const [campcollect , setCampcollect] = useState("0")
        const [dispocollect , setDispocollect] = useState("0")

        const [updateAdavance, setUpdateAdvance] = useState()

        const [camperhold, setCamperhold] = useState()
        const [disposalhold, setDisposalhold] = useState()

        const [custname, setCustname] = useState()

        const [area , setArea] = useState() 

        const [id, setId]  = useState()

        const [advused, setAdvused] = useState()


        const changeHandler = (event) => {

            const value = event.target.value
            const name = event.target.name           

            setFirstInput({...firstInput, [name]:value}); 
        };

// ==========================form submission========================================

    const submitHandler = (event) => {

        event.preventDefault()

            const value = mydata.filter((item)=>{

                    return item.customername == firstInput.customername
            })

            const pend = parseInt( value[0].pending)
            const adv = parseInt( value[0].advance)

            const camprate = parseInt( value[0].camperrate ) 
            const disporate = parseInt ( value[0].disposalrate)

            const camptocollect = parseInt( value[0].camperhold)
            const dispotocollect = parseInt( value[0].disposalhold)

            const docid = value[0].id
            setId(docid)

            const areaa = value[0].area 
            const name = value[0].customername

            setArea(areaa)
            setCustname(name)

            setCamperhold(camptocollect)
            setDisposalhold(dispotocollect)

            const noofcamp = parseInt( firstInput.noofcamper)
            const noofdispo = parseInt(firstInput.noofdisposal)

            const cal = camprate * noofcamp
            const cal2 = disporate * noofdispo
            const TodayPaid = cal + cal2

            setPrice(TodayPaid)
            setPending(pend)
            setAdvance(adv)


             // calculating Total paid amount  
                
                const afterAddingPending = TodayPaid + pend

                const afterMinusAdvance = afterAddingPending - adv

                if(afterMinusAdvance >= 0){

                    setTotalPaid(afterMinusAdvance)

                    setUpdateAdvance(0)  

                    setAdvused(adv)

                }
                else{ 

                    setTotalPaid("Nothing to pay")
                    
                    setUpdateAdvance(Math.abs(afterMinusAdvance))

                    setAdvused(afterAddingPending)

                }

                 
    }

    const updatePokeDex = poke => {
        setFirstInput(poke);
        setDisplay(false);
      };
    


    return (
        <div>

                <Card>
                        <form onSubmit={submitHandler} >

                            <CardContent>

                                    <Typography variant="h5" component="div">
                                        Delivery Entry Form
                                    </Typography>

                                    <hr/> <hr/> 


                                    
                                        <select name="customername" className={props.mystyle.item} onChange={changeHandler}>
                                                
                           

                                                {mydata.map((val) => (
                                                    <option value={val.customername}>{val.customername}</option>
                                                ))} 
                                            
                                        </select>


                                        {/* <TextField  
                                           
                                             name="customername"
                                             onClick={() => setDisplay(!display)}
                                             placeholder="Type to search"
                                             value={firstInput.customername}
                                             onChange={changeHandler}
                                             
                                        />

                                        {display && (
                                                <div className="autoContainer">
                                                {mydata
                                                    .filter(({ name }) => name.indexOf(search.toLowerCase()) > -1)
                                                    .map((value, i) => {
                                                    return (
                                                        <div
                                                        onClick={() => updatePokeDex(value.customername)}
                                                        className="option"
                                                        key={i}
                                                        tabIndex="0"
                                                        >
                                                        <span>{value.customername}</span>
                                                
                                                        </div>
                                                    );
                                                    })}
                                                </div>
                                        )} */}


                                        {/* <Autocomplete

                                            
                                            value={firstInput.customername}
                                            onChange={(event, newValue) => {
                                            setFirstInput({
                                                
                                                ...firstInput, customername:newValue
                                            })

                                            }}

                                            id="combo-box-demo"
                                            options={mydata}
                                            getOptionLabel={(option) => option.customername}
                                     
                                            style={{ width: 300 }}
                                            renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
                                        />
                                                 */}
                                            
                                                
                                                                                    

                                        <TextField  
                                            label="No of Camper" 
                                            id="fullWidth" 
                                            variant="outlined"
                                            margin="dense"
                                            type="number"
                                            name="noofcamper"
                                            required
                                            onChange={changeHandler}/>

                                        <TextField  
                                            label="No of Disposal" 
                                            id="fullWidth" 
                                            variant="outlined"
                                            margin="dense"
                                            type="number"
                                            name="noofdisposal"
                                            required
                                            onChange={changeHandler}/>


                                    

                            </CardContent>

                            <CardActions>

                                <Button 
                                type="submit"
                                variant="contained" 
                                color="primary" 
                                size="small" 
                                endIcon={<InputIcon/>}> Calculate</Button>

                            </CardActions>

                        </form>

                </Card>  

                                           

                <Secondpart 
                    id={id}
                    data={price} 
                    pending={pending} 
                    advance={advance} 
                    total={totalPaid}
                    campertocollect={campcollect}
                    disposaltocollect={dispocollect}
                    disposalhold={disposalhold}
                    camperhold={camperhold}
                    updateAdavance={updateAdavance}
                    area={area}
                    customername={custname}
                    noofcamp={firstInput.noofcamper}
                    noofdispo={firstInput.noofdisposal}
                    advanceused={advused}/>
            
        </div>
    )
}

export default Firstpart
