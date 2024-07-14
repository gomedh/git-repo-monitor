import React, { useMemo } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import LanguagePieChart from './LanguagePieChart';
import useGetRepoLanguages from '../hooks/useGetRepoLanguages';
import repoLanguageStyles from '../styles/repoLanguageStyles';
import PlaceHolder from '../utils/PlaceHolder'
import ViewDetails from '../components/ViewDetails'

const GitRepoLanguages = React.memo(({ repoUrl }) => {
  // Call to get the languages and other states
  const { languages, loading, error } = useGetRepoLanguages(repoUrl);

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
    return <PlaceHolder />;
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
