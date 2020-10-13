import React from 'react';
// MUI
import Box from '@material-ui/core/Box';
// scroll-snap-align: start;
const FullViewHeightSection = (props) => {
  const { component } = props;

  return (
    <Box height='100vh' overflow='hidden' style={{ scrollSnapAlign: 'start' }}>
      {component}
    </Box>
  );
};

export default FullViewHeightSection;
