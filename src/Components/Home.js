import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

import Entryform from './Home_compo/Entryform';
import Deliverylist from './Home_compo/Deliverylist';
import Autostatus from './Home_compo/Autostatus'

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


const Home = () => {

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
                    scrollButtons="auto">


                        <Tab label="Delivery list" />
                        <Tab label="Entry form" />
                        <Tab label="Auto status" />
                

                </Tabs>

            </Box>

            {selectedTab === 0 && <Deliverylist/>}
            {selectedTab === 1    && <Entryform/>}
            {selectedTab === 2    && <Autostatus/>}

           

            
        </div>
    )
}

export default Home
