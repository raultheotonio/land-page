import styled, { css } from 'styled-components';
import { Container as TextComponent } from '../TextComponent/styles';
import { Container as SectionContainer } from '../SectionContainer/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    text-align: center;
    border-top: 0.5rem solid %{theme.colors.mediumGray};
    a {
      color: inherit;
      text-decoration: none;
      font-size: ${theme.sizes.small};
    }

    ${TextComponent} {
      font-size: ${theme.sizes.small};
    }

    ${SectionContainer} {
      padding-top: 0;
      padding-bottom: 0;
    }
  `}
`;
