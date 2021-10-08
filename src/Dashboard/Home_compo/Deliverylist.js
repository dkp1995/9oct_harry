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


  

const Deliverylist = () => {


  const [mydata, setMydata] = useState([])


 

      
      
          firebase.firestore().collection('customerData').get().then((snapshot) => {

            const rows = [];

            snapshot.docs.forEach(doc =>{
          
              rows.push(doc.data())
              

            })

            setMydata(rows)
          }) 










return (
        <div>
            
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>

           
              <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader="true" aria-label="simple table" size="small" >

                      <TableHead>

                        <TableRow>

                          <TableCell>Customer Name </TableCell>
                          <TableCell align="right">Area</TableCell>
                          <TableCell align="right">Address</TableCell>
                          <TableCell align="right">Phone Number</TableCell>
                        </TableRow>

                      </TableHead>

                      <TableBody>

 

                        {mydata.map((row) => (

                                <TableRow key={row.customerid}>
                                                        
                                  <TableCell component="th" scope="row">
                                    {row.customername}
                                  </TableCell>


                                  <TableCell align="right">{row.area}</TableCell>
                                  <TableCell align="right">{row.address}</TableCell>
                                  <TableCell align="right">{row.phonenumber}</TableCell>


                                </TableRow>

                        ))}



                      </TableBody>

                    </Table>

                  </TableContainer>



              </Paper>
        </div>
    )
}

export default Deliverylist
