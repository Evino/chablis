import styled from 'styled-components';
import { colors } from '../../../styles/variables';

const ProgressBarContainer = styled.div`
  display: flex;
  align-items: center;

  p {
    font-size: 14px;
    margin-right: 10px;
    width: ${({ labelWidth }) => labelWidth || '60px'};
    color: ${colors.DEFAULT_BLACK}
  }
`;

export default ProgressBarContainer;
