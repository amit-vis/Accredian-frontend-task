import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="hm" sx={{display: 'flex', justifyContent:'center', marginTop: '2%'}}>
        <Box sx={{ 
            bgcolor: '#cfe8fc', 
            height: '50vh', 
            width:"60%",
            backgroundImage: 'url(https://static-perf1.zupee.com/blog-images/uploads/2023/05/refer-and-earn-apps-in-india.webp)', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '10px',
            boxShadow:'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'
            }} />

      </Container>
    </React.Fragment>
  );
}