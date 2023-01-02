import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    //background: ${theme.colors.secondaryBg};
    font-size: 12px;
  `}
`;
