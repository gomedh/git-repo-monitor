import React from 'react';
import { Link } from '@mui/material';
import modalStyles from '../styles/modalStyles';
import { VIEW_DETAILS_TEXT } from '../utils/constants';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const ViewDetails = React.memo(({ repoUrl }) => 
{
    return (
    // View Details Link
    <Link href="#" underline="hover" sx={modalStyles.link} >
        {VIEW_DETAILS_TEXT}
        <ChevronRightIcon sx={{ ml: 0.5 }} />
    </Link>
    )

});

export default ViewDetails;
