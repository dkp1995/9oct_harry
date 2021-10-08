import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import firebase from '../Config/FirebaseConfig'

const Customerlist = () => {

    const [mydata, setMydata] = useState([])


    

    useEffect(() => {

      const fetchdata = async () => {
      
          firebase.firestore().collection('customerData').get().then((snapshot) => {

            const rows = [];

            snapshot.docs.forEach(doc =>{
          
              rows.push(doc.data())
              

            })

            setMydata(rows)
          }) 

        }

        fetchdata()

    }, [])    


 


    return (
        <div>

            
<Paper sx={{ width: '100%', overflow: 'hidden' }}>

           
<TableContainer sx={{ maxHeight: 440 }}>
      <Table stickyHeader="true" aria-label="simple table" size="small" >

        <TableHead>

          <TableRow>

            <TableCell>Customer Id </TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Area</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Phone Number</TableCell>
            <TableCell align="right">Deposit</TableCell>
            <TableCell align="right">Disposal Rate</TableCell>
            <TableCell align="right">Camper Rate</TableCell>
            <TableCell align="right">Frequency</TableCell>
          </TableRow>

        </TableHead>

        <TableBody>



          {mydata.map((row) => (

                  <TableRow >
                                          
                  <TableCell component="th" scope="row">
                    {row.customerid}
                  </TableCell>

                  <TableCell align="right">{row.customername}</TableCell> 
                  <TableCell align="right">{row.area}</TableCell>
                  <TableCell align="right">{row.address}</TableCell>
                  <TableCell align="right">{row.phonenumber}</TableCell>
                  <TableCell align="right">{row.deposit}</TableCell>
                  <TableCell align="right">{row.disposalrate}</TableCell>
                  <TableCell align="right">{row.camperrate}</TableCell>
                  <TableCell align="right">{row.frequency}</TableCell>
                  


                  </TableRow>

          ))}



        </TableBody>

      </Table>

    </TableContainer>



</Paper>
            
        </div>
    )
}

export default Customerlist
