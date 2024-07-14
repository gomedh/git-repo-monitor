import React, { useState, useMemo } from 'react';
import { Box, Typography, Grid, Link, CircularProgress } from '@mui/material';
import LanguagePieChart from './LanguagePieChart';
import useGetRepoLanguages from '../hooks/useGetRepoLanguages';
import modalStyles from '../styles/modalStyles';
import repoLanguageStyles from '../styles/repoLanguageStyles';
import { VIEW_DETAILS_TEXT } from '../utils/constants';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PlaceHolder from '../utils/PlaceHolder'
import ViewDetails from '../components/ViewDetails'

const GitRepoLanguages = React.memo(({ repoUrl }) => {
  // Call to get the languages
  const { languages, loading, error } = useGetRepoLanguages(repoUrl);
  const [detailsOpen, setDetailsOpen] = useState(false);

  const totalBytes = useMemo(() => {
    return Object.values(languages).reduce((total, bytes) => total + bytes, 0);
  }, [languages]);

  // To set the open view details modal
  const handleViewDetails = () => {
    setDetailsOpen(true);
  };

  // To set the close view details modal
  const handleCloseDetails = () => {
    setDetailsOpen(false);
  };

  // To get and set the programming languages
  const languageItems = useMemo(() => {
    return Object.entries(languages)
      .slice(0, 5)
      .map(([language], index) => (
        <Typography key={language} sx={repoLanguageStyles.languageItem(index)}>
          {language}
        </Typography>
      ));
  }, [languages]);

  if (loading) {
    // Placeholder for loading state to maintain layout when option is changed in dropdown
    return PlaceHolder();
  }

  if (error) return <Typography>Error: {error}</Typography>;

  return (
    // Container
    <Box sx={repoLanguageStyles.container}>
      <Grid container spacing={2} alignItems="center">
        {/* Languages */}
        <Grid item xs={5} sx={{ alignSelf: 'flex-start'}}>
          {languageItems}
        </Grid>
        <Grid item xs={7}>
          <LanguagePieChart languages={languages} />
        </Grid>
      </Grid>
      {/* Link to view details */}
      <ViewDetails />
    </Box>
  );
});

export default GitRepoLanguages;
