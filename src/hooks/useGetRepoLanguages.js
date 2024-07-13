import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetRepoLanguages = (repoUrl) => {
  const [languages, setLanguages] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLanguages = async () => {
      if (!repoUrl) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const response = await axios.get(repoUrl);
        setLanguages(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchLanguages();
  }, [repoUrl]);

  return { languages, loading, error };
};

export default useGetRepoLanguages;
