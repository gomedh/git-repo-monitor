/*  This component holds logic and UI for the Dropdown */

import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import axios from 'axios';
import { GIT_HUB_API, API_OPTIONS, ERROR_TEXT, DROPDOWN_PLACEHOLDER } from '../utils/constants';

const GitRepoDropdown = ({ onSelectRepo }) => {
  const [repos, setRepos] = useState([]);
  const [selectedRepo, setSelectedRepo] = useState('');

  // To fetch the GIT urls from the api
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get(GIT_HUB_API, API_OPTIONS);
        setRepos(response.data.items);
      } catch (error) {
        console.error(ERROR_TEXT, error);
      }
    };
    fetchRepos();
  }, []);

  // To set the drop down value and notify about the change
  const handleChange = (event) => {
    const repoUrl = event.target.value;
    setSelectedRepo(repoUrl);
    onSelectRepo(repoUrl);
  };

  return (
    <FormControl fullWidth margin="normal"
    sx={{
      marginTop: '7px', // To adjust the margin between the label and the dropdown
    }}
    >
      <InputLabel id="repo-select-label">{DROPDOWN_PLACEHOLDER}</InputLabel>
      <Select
        labelId="repo-select-label"
        id="repo-select"
        value={selectedRepo}
        label={DROPDOWN_PLACEHOLDER}
        onChange={handleChange}
      >
        {repos.map((repo) => (
          <MenuItem key={repo.id} value={repo.languages_url}>
            {repo.full_name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default GitRepoDropdown;
