import { CHART_COLORS } from "../utils/constants";

const repoLanguagesStyles = {
  container: {
    width: '100%',
    marginTop: 2,
  },
  languageItem: (index) => ({
    display: 'flex',
    alignItems: 'center',
    '&:before': {
      content: '""',
      width: 12,
      height: 12,
      backgroundColor: CHART_COLORS[index % CHART_COLORS.length],
      borderRadius: '50%',
      marginRight: 1,
    },
  }),
};

export default repoLanguagesStyles;
