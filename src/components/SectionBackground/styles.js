import styled, { css } from 'styled-components';

const containerBackgroundActivate = (theme) => css`
  background: ${theme.colors.primarycolor};
  color: ${theme.colors.white};
`;

export const Container = styled.div`
  ${({ theme, background }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.primarycolor};

    ${background && containerBackgroundActivate(theme)}
    display: flex;
    min-height: 100vh;
    align-items: center;
  `}
`;
