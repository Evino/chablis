import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fontSizes, fontWeights, sizes, colors } from '../../../styles/variables';

const SubTitleComponent = styled.h3`
  font-size: ${fontSizes.BIG};
  font-weight: ${fontWeights.REGULAR};
  padding: ${sizes.LARGE} 0;
  margin: 0;
  display: block;
  color: ${colors.BLACK};
`;

export default class TitleLarge extends PureComponent {
  static defaultProps = {
    small: false,
  }

  static propTypes = {
    children: PropTypes.node.isRequired,
    small: PropTypes.bool,
  }

  render() {
    return (
      <SubTitleComponent {...this.props}>{this.props.children}</SubTitleComponent>
    );
  }
}
