import * as React from 'react';
import styled from 'styled-components';
import { colors } from '../../theme/colors';

interface Props {
  children: React.ReactNode;
  borderColor?: string;
  backgroundColor?: string;
  overflow?: string;
  isRounded?: boolean;
}

export function Card(props: Props): JSX.Element {
  const { children, borderColor, backgroundColor, overflow = 'hidden', isRounded = true } = props;

  return (
    <StyledCard borderColor={borderColor} backgroundColor={backgroundColor} overflow={overflow} isRounded={isRounded}>
      {children}
    </StyledCard>
  );
}

const StyledCard = styled.div<Props>`
  background-color: ${({ backgroundColor }) => backgroundColor || 'white'};
  border: 1px solid ${({ borderColor }) => borderColor || '#dbdbdb'};
  border-radius: ${({ isRounded }) => (isRounded ? 6 : 0)}px;
  box-sizing: border-box;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.03);
  overflow: ${({ overflow }) => overflow};
`;

/**
 * Read about making cards accessible: https://inclusive-components.design/cards/
 */
export const InteractiveCard = styled(StyledCard).attrs({
  tabIndex: 1,
})`
  &:focus,
  &:active,
  &:hover {
    outline: none;
    cursor: pointer;
    border-color: ${colors.brand[400]};
    box-shadow: 0 0 0 3px ${colors.brand[100]};
  }
`;
