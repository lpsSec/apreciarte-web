import * as React from 'react';
import {Box, Tab, Tabs, Typography } from '@mui/material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function MenuCapitulo() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: 'flex', textAlign: 'center', justifyContent: 'center' }}>
      <Box sx={{ width: '30%', marginTop: 10 }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', textAlign: 'center' }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label='Capítulo 1' />
            <Tab label='Capítulo 2' />
            <Tab label='Capítulo 3' />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Box>
    </Box>
  );
}
