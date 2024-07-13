import React, { useState } from 'react';
import { Box, Button, Typography, Card, CardContent } from '@mui/material';
import RepoModal from './RepoModal';

const Home = () => {
  // Modal Status state i.e. open ,close
  const [open, setOpen] = useState(false);

  // Event handlers to handle modal open or close
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    // Box is the outermost container of the content
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        backgroundColor: '#ffff',
        padding: 2,
      }}
    >
    {/* Inner container */}
      <Card
        sx={{
          width: '100%',
          backgroundColor: '#E4E7EC',
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        {/* Main content */}
        <CardContent>
            {/* Heading */}
          <Typography variant="h4" gutterBottom color='#101828'>
            Github Repository Language
          </Typography>
          {/* Button to open modal */}
          <Button
            variant="contained"
            color="secondary"
            onClick={handleOpen}
            sx={{
              mt: 2,
              backgroundColor: '#265A62',
              color: 'white',
              '&:hover': {
                backgroundColor: '#374151',
              },
            }}
          >
            Open Pie Chart +
          </Button>
          <RepoModal open={open} onClose={handleClose} />
        </CardContent>
      </Card>
    </Box>
  );
};

export default Home;
