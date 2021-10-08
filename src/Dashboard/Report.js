import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

import DailyReport from './Report/DailyReport';
import WeekReport from './Report/WeekReport';
import MonthReport from './Report/MonthReport';
import YearReport from './Report/YearReport';

import moment from 'moment';

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


const Report = () => {

    const classes = useStyle();

    const [selectedTab, setSelectedTab] = React.useState(0);

    const handleChange = (event, newValue) => {
      setSelectedTab(newValue);
    };


    const today = moment().format("MMM Do YY")
    const week = moment().startOf('week').fromNow();


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
                    <Tab label="Today's Report" />
                    <Tab label="Weekly Report" />
                    <Tab label="Monthly Report" />
                    <Tab label="Yearly Report" />
                

                </Tabs>

            </Box>

            {selectedTab === 0 && <DailyReport />}
            {selectedTab === 1    && <WeekReport />}
            {selectedTab === 2    && <MonthReport />}
            {selectedTab === 3    && <YearReport />}


            
        </div>
    )
}

export default Report
