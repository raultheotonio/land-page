import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${() => css`
    display: flex;
    align-items: center;
    height: 10rem;

    text-decoration: none;
    color: inherit;
    > img {
      max-height: 3rem;
    }
  `}
`;
