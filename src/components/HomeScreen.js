/* Initial Home Screen which holds the card as a bg and a button to open the modal */

import React, { useState } from 'react';
import { Box, Button, Typography, Card, CardContent } from '@mui/material';
import RepoModal from './RepoModal';
import homeScreenStyles from '../styles/homeScreenStyles'
import {HOME_SCREEN_TITLE, MAIN_TITLE_COLOR, OPEN_MODAL_BUTTON } from "../utils/constants"
import AddIcon from '@mui/icons-material/Add';

const Home = () => {
  // Modal Status state i.e. open ,close
  const [open, setOpen] = useState(false);

  // Event handlers to handle modal open or close
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    // Box is the outermost container of the content
    <Box
      sx={homeScreenStyles.outerBox}
    >
    {/* Inner container */}
      <Card
        sx={homeScreenStyles.innerCard}
      >
        {/* Main content */}
        <CardContent>
            {/* Heading */}
          <Typography variant="h4" gutterBottom 
          color={MAIN_TITLE_COLOR}
          sx={homeScreenStyles.BoldText}
          >
            {HOME_SCREEN_TITLE}
          </Typography>
          {/* Button to open modal */}
          <Button
            variant="contained"
            color="secondary"
            onClick={handleOpen}
            sx={homeScreenStyles.openButton}
          >
            {OPEN_MODAL_BUTTON}
            <AddIcon />
          </Button>
          <RepoModal open={open} onClose={handleClose} />
        </CardContent>
      </Card>
    </Box>
  );
};

export default Home;
