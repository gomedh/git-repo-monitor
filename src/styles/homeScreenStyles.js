import {OPEN_DIALOG_BUTTON_COLOR, CARD_BG_COLOR} from "../utils/constants"

const homeScreenStyles = {
    outerBox: {
      display: 'flex',
      minHeight: '100vh',
      backgroundColor: '#ffff',
      padding: 3,
    },
    innerCard: {
      width: '100%',
      backgroundColor: CARD_BG_COLOR,
      borderRadius: 4,
      boxShadow: 3,
    },
    openButton: {
        mt: 2,
        textTransform: 'none',
        fontWeight: 'bold',
        backgroundColor: OPEN_DIALOG_BUTTON_COLOR,
        color: 'white',
        '&:hover': {
            backgroundColor: '#374151',
        }
    },
    BoldText: {
      fontWeight: 'bold',
    }
  };
  
  export default homeScreenStyles;
  