import P from 'prop-types';
import * as Styled from './styles';
import { TextComponent } from '../TextComponent';
import { SectionContainer } from '../SectionContainer';

export const Footer = ({ html }) => (
  <Styled.Container>
    <SectionContainer>
      <TextComponent>{html}</TextComponent>
    </SectionContainer>
  </Styled.Container>
);

Footer.propTypes = {
  html: P.string.isRequired,
};
