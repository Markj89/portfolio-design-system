import React, { FunctionComponent } from 'react';
import { SvgIcon as MuiSvgIcon, SvgIconProps, styled } from '@mui/material';

const SvgIcon = styled(MuiSvgIcon, { name: 'MJIcon', shouldForwardProp: (prop) => prop !== 'fill'})<SvgIconProps>(() => ({
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'round',
    strokeLinejoin:  'round',
    strokeWidth:  '2.25px',
}));

SvgIcon.defaultProps = {
    viewBox: '0 0 24 24',
    focusable: 'false',
    'aria-hidden': 'true',
};

const MJIcons: FunctionComponent<SvgIconProps> = (props) => {
    return (
        <SvgIcon {...props} />
    );
};

export default MJIcons;