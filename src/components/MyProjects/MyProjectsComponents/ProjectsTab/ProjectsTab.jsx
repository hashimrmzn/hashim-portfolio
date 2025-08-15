import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import FrontendProjects from './FrontendProjects/FrontendProjects';
import WordpressProjects from './WordpressProjects/WordpressProjects';

function ProjectsTab() {
  const [value, setValue] = React.useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ width: '100%', typography: 'body1', mt: 10 }}>
      <TabContext value={value}>
        {/* Tab List */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList
            className='tab-btns'
            onChange={handleChange}
            sx={{
              '& .MuiTabs-indicator': {
                backgroundColor: '#ffb400'
              },
              '& .Mui-selected': {
                color: '#ffb400 !important'
              }
            }}
          >
            <Tab label="Frontend Development" value="1" />
            <Tab label="WordPress Development" value="2" />
          </TabList>
        </Box>

        {/* Frontend Tab */}
        <TabPanel value="1"
        sx={{ p: 0,
          marginTop:"40px",
         }}
        >
          <FrontendProjects />
        </TabPanel>

        {/* WordPress Tab */}
        <TabPanel value="2"
        sx={{ p: 0,
          marginTop:"40px",
         }}
        >
          <WordpressProjects />
        </TabPanel>
      </TabContext>


     
    </Box>

    
     
  );
}

export default ProjectsTab;
