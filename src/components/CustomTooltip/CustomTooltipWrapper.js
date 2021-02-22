import styled from 'styled-components';

import TooltipWrapper from '../Tooltip/TooltipWrapper';

import {
  colors,
  fontSizes,
  fontWeights,
  sizes,
} from '../../styles/variables';

const CustomTooltipWrapper = styled(TooltipWrapper)`
  position: absolute;
  min-width: 255px;
  max-width: 280px;
  padding: ${sizes.DEFAULT} 24px;
  ${({ alignY }) => alignY}: calc(100% + 15px);
  ${({ alignX }) => alignX}: ${({ spaced }) => (spaced ? '-55px' : 'calc(50% - 32px)')};

  img {
    width: 100%;
    height: auto;
    margin-bottom: ${sizes.DEFAULT};
    pointer-events: none;
  }

  p {
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${colors.BLACK};
    font-size: ${fontSizes.EXTRASMALL};
    font-weight: ${fontWeights.REGULAR};
    line-height: ${fontSizes.SMALL};
    text-align: left;
    margin: 0;
  }
`;

export default CustomTooltipWrapper;
