import {COLOR_CTA_LINK} from "../utils/constants"

const modalStyles = {
    modalBox: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 450,
      bgcolor: 'background.paper',
      boxShadow: 24,
      p: 4,
      borderRadius: 2,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
    },
    contentBox: {
      width: '100%',
    },
    link: {
      display: 'flex',
      alignItems: 'center',
      mt: 1,
      fontWeight: 'bold',
      color: COLOR_CTA_LINK,
    },
    TitleText: {
      fontWeight: 'bold',
    }
  };
  
  export default modalStyles;
  