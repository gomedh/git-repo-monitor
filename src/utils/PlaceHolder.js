/* Placeholder component util to manage the height of the  */
import React from 'react';
import { Box, Grid, CircularProgress } from '@mui/material';
import LanguagePieChart from '../components/LanguagePieChart';
import repoLanguageStyles from '../styles/repoLanguageStyles';
import ViewDetails from '../components/ViewDetails';

const PlaceHolder = () => {
  
    // Placeholder for loading state to maintain layout when option is changed in dropdown
    return (
      <Box sx={repoLanguageStyles.container}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={5} sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
            }}>
            <CircularProgress size={24} />
          </Grid>
          <Grid item xs={7}>
            <LanguagePieChart languages={{}} /> {/* Placeholder chart */}
          </Grid>
        </Grid>
        {/* View Details Component */}
        <ViewDetails />
      </Box>
    );

};

export default PlaceHolder;
