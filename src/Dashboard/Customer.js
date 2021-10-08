import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

import Customerlist from './Customer_compo/Customerlist';
import Entryform from './Home_compo/Entryform';
import Addnewcustomer from './Customer_compo/Addnewcustomer';

const useStyle = makeStyles((theme)=>({

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
            padding: theme.spacing(0, 0, 0, 7),
          },
      },

      box:{
        maxWidth: 1000, 
        bgcolor: 'background.paper',

      },

      
}))

const Customer = () => {

    const classes = useStyle();

    const [selectedTab, setSelectedTab] = React.useState(0);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };


    return (
        <div className={classes.content}>
            <div className={classes.toolbar} />
            <Box className={classes.box}>
                <Tabs
                    value={selectedTab}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    <Tab label="Customer list" />
                    <Tab label="Add New customer" />
                    <Tab label="Payment management" />
                

                </Tabs>

            </Box>

            {selectedTab === 0 && <Customerlist/>}
            {selectedTab === 1    && <Addnewcustomer/>}
            {selectedTab === 2    && <Entryform/>}
            


        </div>    
    )
}

export default Customer
