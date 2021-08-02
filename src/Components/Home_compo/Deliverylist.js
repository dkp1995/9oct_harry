import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';



const useStyles = makeStyles((theme)=>({
    table: {
      minWidth: 650,
      [theme.breakpoints.down('md')]: {
        padding: theme.spacing(0, 5)
      },
    },

    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(0, 12),

        [theme.breakpoints.down('md')]: {
            flexGrow: 1,
            padding: theme.spacing(0,0,0,0),
          },
      },

      btnselected : {
        backgroundColor: theme.palette.common.green,
        color: theme.palette.common.white,
      },

      btnUnselected : {

        backgroundColor: theme.palette.common.white,
      }

    
}));  

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),

    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),

    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];




const Deliverylist = () => {

    const classes = useStyles();

    

  const [selectedbtn, setSeletedbtn] = React.useState(false)

 

  const cellSelected = () =>{

      setSeletedbtn(true) 

     

  }

  // let selecteddata = selectedbtn ? classes.btnSelected : classes.btnUnselected;

    return (
        <div>
            
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>

           
              <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader="true" aria-label="simple table" size="small" >

                      <TableHead>

                        <TableRow>

                          <TableCell>Customer Name </TableCell>
                          <TableCell align="right">Camper</TableCell>
                          <TableCell align="right">Disposal</TableCell>
                          <TableCell align="right">Address</TableCell>
                          <TableCell align="right">Area</TableCell>
                          <TableCell align="right">Phone Number</TableCell>
                        </TableRow>

                      </TableHead>

                      <TableBody>
                        {rows.map((row) => (
                          <TableRow key={row.name} 
                              onClick={cellSelected}  
                          
                                className={selectedbtn ? classes.btnselected : classes.btnUnselected}>

                            <TableCell component="th" scope="row">
                              {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>


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
