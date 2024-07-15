/* This component is the modal container */

import React, { useState, useEffect } from 'react';
import { Modal, Box, IconButton, Typography } from '@mui/material';
import GitRepoDropdown from './GitRepoDropdown';
import GitRepoLanguages from './GitRepoLanguages';
import CloseIcon from '@mui/icons-material/Close';
import modalStyles from '../styles/modalStyles';
import { TITLE_TEXT_MODAL, REPO_SELECT_LABEL, CLOSE_ICON_COLOR } from '../utils/constants';
import PlaceHolder from '../utils/PlaceHolder';

const RepoModal = ({ open, onClose }) => {
  // State to get the selected value
  const [selectedRepoUrl, setSelectedRepoUrl] = useState('');

  // To reset the value when the modal is closed
  useEffect(() => {
    if (!open) {
      setSelectedRepoUrl('');
    }
  }, [open]);

  const handleSelectRepo = (repoUrl) => {
    setSelectedRepoUrl(repoUrl);
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      {/* Container */}
      <Box sx={modalStyles.modalBox}>
        <Box sx={modalStyles.header}>
          {/* Modal Title */}
          <Typography variant="h6" id="modal-title" sx={modalStyles.TitleText}>
            {TITLE_TEXT_MODAL}
          </Typography>
          {/* Closed Button */}
          <IconButton onClick={onClose} sx={modalStyles.closeButton}>
            <CloseIcon sx={{ color: CLOSE_ICON_COLOR }} />
          </IconButton>
        </Box>
        {/* GIT Repo select Drop down */}
        <Box id="modal-description" sx={modalStyles.contentBox}>
          <Typography variant="body1" sx={modalStyles.typography}>
            {REPO_SELECT_LABEL}
          </Typography>
          <GitRepoDropdown onSelectRepo={handleSelectRepo} />
          <GitRepoLanguages repoUrl={selectedRepoUrl} /> 
        </Box>
      </Box>
    </Modal>
  );
};

export default RepoModal;
