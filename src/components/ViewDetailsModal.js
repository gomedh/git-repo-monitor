/*  This component holds logic and UI for the view details modal */

import React from 'react';
import { Modal, Box, Typography, IconButton } from '@mui/material';
import modalStyles from '../styles/modalStyles';
import repoLanguageStyles from '../styles/repoLanguageStyles';
import CloseIcon from '@mui/icons-material/Close';
import {DETAILS_TITLE, CLOSE_ICON_COLOR} from "../utils/constants"

const ViewDetailsModal = ({ open, onClose, languages, totalBytes }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="details-modal-title"
      aria-describedby="details-modal-description"
    >
      {/* Container */}
      <Box sx={modalStyles.modalBox}>
        <Box sx={modalStyles.header}>
          {/* Title */}
        <Typography variant="h6" id="details-modal-title">
          {DETAILS_TITLE}
        </Typography>
        {/* Close Button */}
        <IconButton onClick={onClose} sx={modalStyles.closeButton}>
          <CloseIcon sx={{color:CLOSE_ICON_COLOR}}/>
        </IconButton>
        </Box>
        {/* Modal Content */}
        <Box id="details-modal-description">
          {Object.entries(languages).slice(0, 5).map(([language, bytes], index) => (
            <Typography key={language} sx={repoLanguageStyles.languageItem(index)}>
              {language}: {((bytes / totalBytes) * 100).toFixed(2)}%
            </Typography>
          ))}
        </Box>
      </Box>
    </Modal>
  );
};

export default ViewDetailsModal;
