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
import  Box  from '@material-ui/core/Box';



const WeekReport = () => {


    const [mydata, setMydata] = useState([])


    const sevendaysbefore = Date.now() - 604800000


      
         useEffect(() => {
          
          firebase.firestore().collection('rawData').where('timestamp','>',sevendaysbefore).get().then((snapshot) => {

            const rows = [];

            snapshot.docs.forEach(doc =>{
          
              rows.push(doc.data())
              

            })

            setMydata(rows)
          }) 



         }, [])



  





return (
        <div>

            <Box
                sx={{
                    textAlign: 'center',
                    margin:'2vh',
                    display: 'flex',
                    flexWrap: 'wrap',
                    
                    '& > :not(style)': {
                    m: 2,
                    width: 128,
                    height: 128,

                    },
                }}
                >   <Paper elevation={3}>{550}</Paper>
                    <Paper elevation={3}><h1>550</h1></Paper>
                    <Paper elevation={3}><h1>550</h1></Paper>
                    <Paper elevation={3}><h1>550</h1></Paper>
                    <Paper elevation={3}><h1>550</h1></Paper>
                    <Paper elevation={3}><h1>550</h1></Paper>
                </Box>

            
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>

           
              <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader="true" aria-label="simple table" size="small">

                      <TableHead>

                        <TableRow>

                          <TableCell>Customer Name </TableCell>
                          <TableCell align="right">Camper</TableCell>
                          <TableCell align="right">Disposal</TableCell>
                          <TableCell align="right">Camper Return</TableCell>
                          <TableCell align="right">Disposal Return</TableCell>

                          <TableCell align="right">Payment Received</TableCell>
                          <TableCell align="right">Advance Received</TableCell>
                          <TableCell align="right">Advance Used</TableCell>
                          <TableCell align="right">Pending Received</TableCell>
                          <TableCell align="right">Pending Created</TableCell>

                          <TableCell align="right">Delivery Time</TableCell>
                          <TableCell align="right">Delivery By</TableCell>
                       


                        </TableRow>

                      </TableHead>

                      <TableBody>

                  

                        {mydata.map((row,index) => (

                                <TableRow key={index}>
                                                        
                                  <TableCell component="th" scope="row">
                                    {row.customername}
                                  </TableCell>


                                  <TableCell align="right">{row.camper}</TableCell>
                                  <TableCell align="right">{row.disposal}</TableCell>
                                  <TableCell align="right">{row.camperreturn}</TableCell>
                                  <TableCell align="right">{row.disposalreturn}</TableCell>

                                  <TableCell align="right">{row.paymentreceived}</TableCell>
                                  <TableCell align="right">{row.advancereceived}</TableCell>
                                  <TableCell align="right">{row.advanceused}</TableCell>
                                  <TableCell align="right">{row.pendingreceived}</TableCell>
                                  <TableCell align="right">{row.pendingcreated}</TableCell>

                                  <TableCell align="right">{row.timestamp}</TableCell>
                                  <TableCell align="right">{row.Entryby}</TableCell>


                                </TableRow>

                        ))}



                      </TableBody>

                    </Table>

                  </TableContainer>



              </Paper>
        </div>
    )
}

export default WeekReport
