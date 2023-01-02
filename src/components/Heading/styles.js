import styled, { css } from 'styled-components';

const mediaFont = (theme) => css`
  @media ${theme.media.lteMedium} {
    font-size: ${theme.sizes.xlarge};
  }
`;

const titleSize = {
  small: (theme) => css`
    font-size: ${theme.sizes.small};
  `,
  medium: (theme) => css`
    font-size: ${theme.sizes.large};
  `,
  big: (theme) => css`
    font-size: ${theme.sizes.xlarge};
  `,
  huge: (theme) => css`
    font-size: ${theme.sizes.xhuge};
    ${mediaFont(theme)}
  `,
};

const titleCase = (uppercase) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

export const Title = styled.h1`
  ${({ theme, colorDark, size, uppercase }) => css`
    color: ${colorDark ? theme.colors.primaryColor : theme.colors.white};
    ${titleSize[size](theme)}
    ${titleCase(uppercase)}
  `}
`;
