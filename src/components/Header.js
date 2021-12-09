import React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';

function Header() {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Box
        sx={{
          width: '100%',
          bgcolor: '#000000',
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
          height: 75,
          marginBottom: '50px',
        }}
      >
        <Tabs value={value} onChange={handleChange}  centered>
          <Tab
            sx={{ width: '75%', color:'#fffff0'}}
            label='Mainpage'
            component={Link}
            to="/"
          />
          <Tab
            sx={{ width: '75%', color:'#fffff0' }}
            label="Favorites"
            component={Link}
            to='/favorited'
          />
        </Tabs>
      </Box>
    );
  }
  
  export default Header;