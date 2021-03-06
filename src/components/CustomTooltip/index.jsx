import React from 'react';
import PropTypes from 'prop-types';

import CustomTooltipWrapper from './CustomTooltipWrapper';
import { GetPosition } from '../../Utils';

const CustomTooltip = ({
  align,
  children,
  className,
  spaced,
  show,
  type,
}) => {
  const position = GetPosition(align);

  const CustomTooltipProps = {
    alignX: position[0],
    alignY: position[1],
    className,
    show,
    spaced,
    type,
  };

  return <CustomTooltipWrapper {...CustomTooltipProps}>{children}</CustomTooltipWrapper>;
};

CustomTooltip.propTypes = {
  align: PropTypes.oneOf([
    'bottom-start',
    'bottom-end',
    'top-start',
    'top-end',
  ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
  spaced: PropTypes.bool,
  show: PropTypes.bool,
  type: PropTypes.oneOf([
    'default',
    'success',
    'danger',
  ]),
};

CustomTooltip.defaultProps = {
  align: 'top-end',
  className: '',
  spaced: false,
  show: true,
  type: 'default',
};

export default CustomTooltip;
