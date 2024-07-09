import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

export const NavBar = () => {
    return (
        <>
            <AppBar position="static" sx={{boxShadow:'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px'}}>
                <Toolbar>
                    <Typography variant="h6" component="div">
                        Accredian
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    );
}
