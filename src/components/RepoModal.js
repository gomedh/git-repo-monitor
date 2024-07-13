import React, { useState, useEffect } from 'react';
import { Modal, Box, IconButton, Typography, Link } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const RepoModal = ({ open, onClose }) => {

  return (
    // Modal to hold the content
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      {/* Container */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 500,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          {/* Modal Heading */}
          <Typography variant="h6" id="modal-title">
            Github Repository Language Pie Chart
          </Typography>
          {/* Close button at top right */}
          <IconButton onClick={onClose} sx={{ color: '#0D6EFD' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        {/* Modal Content */}
        <Box id="modal-description" sx={{ width: '100%' }}>
          <Typography variant="body1" sx={{ mt: 2, mb: 2 }}>
            Select Github Repository
          </Typography>
          {/* Link at the bottom of the modal */}
          <Link
            href="#"
            underline="hover"
            sx={{ display: 'block', mt: 2, color: '#0D6EFD' }}
          >
            View details
          </Link>
        </Box>
      </Box>
    </Modal>
  );
};

export default RepoModal;
