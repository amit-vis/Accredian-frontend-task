import * as React from 'react';
import {Box, Button, Typography} from '@mui/material';
import {GroupAdd, Assignment, AccountBalanceWallet} from '@mui/icons-material';
import { useHero } from '../../context/Hero';


export default function SecondContainer() {
  const { handleOpen} = useHero();
  return (
    <Box sx={{ width: '100%', padding: '2%', bgcolor: '#cfe8fc', marginTop: '2%', marginBottom:'2%',
      boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'
     }}>
      <Box sx={{display: 'flex', justifyContent: 'space-around'}}>
      <Box sx={{
        width: '35vh',
        height: '35vh', borderRadius: '50%',
        border: '2px solid blue', display: 'flex', alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'dashed'
      }}>
        <Box sx={{
            width: '30vh',
            height: '30vh',
            borderRadius: '50%',
            boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
            padding:'8%',
            '&:hover': {
              transform: 'scale(1.1)',
              transition: 'all 0.3s ease-in-out'
            }
          }}>
            <GroupAdd sx={{ fontSize: '5rem', 
              color: '#1a73e8', 
              borderRadius:'5px'
              }} />
            <Typography
              sx={{
                fontSize:'0.9rem',
                fontFamily:'sans-serif'
              }}
            >Submit referrals easily via our website’s referral section.</Typography>
          </Box>
      </Box>
      <Box sx={{
        width: '35vh',
        height: '35vh', borderRadius: '50%',
        border: '2px solid blue', display: 'flex', alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'dashed'
      }}>
        <Box sx={{
            width: '30vh',
            height: '30vh',
            borderRadius: '50%',
            boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
            padding:'8%',
            '&:hover': {
              transform: 'scale(1.1)',
              transition: 'all 0.3s ease-in-out'
            }
          }}>
            <Assignment sx={{fontSize: '5rem', 
              color: '#1a73e8', 
              borderRadius:'5px'}}/>
            <Typography sx={{
                fontSize:'0.9rem',
                fontFamily:'sans-serif'
              }}>Earn rewards once your referral joins an Accredian program</Typography>
          </Box>
      </Box>
      <Box sx={{
        width: '35vh',
        height: '35vh', borderRadius: '50%',
        border: '2px solid blue', display: 'flex', alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'dashed'
      }}>
        <Box sx={{
            width: '30vh',
            height: '30vh',
            borderRadius: '50%',
            boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
            padding:'8%',
            '&:hover': {
              transform: 'scale(1.1)',
              transition: 'all 0.3s ease-in-out'
            }
          }}>
            <AccountBalanceWallet sx={{fontSize: '5rem', 
              color: '#1a73e8', 
              borderRadius:'5px'}}/>
            
            <Typography sx={{
                fontSize:'0.9rem',
                fontFamily:'sans-serif'
              }}>Earn rewards once your referral joins an Accredian program</Typography>
          </Box>
      </Box>
      </Box>
      
      <Button 
  variant='contained' 
  sx={{
    marginTop: '5%', 
    borderRadius: '5px',
    paddingTop:'1%',
    paddingBottom:'1%',
    paddingLeft:'2%',
    paddingRight:'2%',
    '&:hover': {
      bgcolor:'transparent',
      color:'#1976d2',
      border: '2px solid #1976d2'
    }
  }}
  onClick={handleOpen}
>
  Refer Now
</Button>
    </Box>
  );
}