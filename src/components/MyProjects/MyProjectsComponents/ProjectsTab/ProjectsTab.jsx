import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import FrontendProjects from './FrontendProjects/FrontendProjects';

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
        <TabPanel value="1">
          <FrontendProjects />
        </TabPanel>

        {/* WordPress Tab */}
        <TabPanel value="2">
          <Stack spacing={1}>
            <Typography variant="h6" sx={{ fontWeight: 600, color: '#ffb400' }}>
              WordPress Skills
            </Typography>
            <Typography>- Custom Theme Development</Typography>
            <Typography>- Custom Plugin Development</Typography>
            <Typography>- Elementor Page Building</Typography>
            <Typography>- WooCommerce Integration</Typography>
            <Typography>- Site Performance & SEO Optimization</Typography>
          </Stack>
        </TabPanel>
      </TabContext>
    </Box>
  );
}

export default ProjectsTab;
