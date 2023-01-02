import P from 'prop-types';
import * as Styled from './styles';
import { SectionContainer } from '../SectionContainer';

export const SectionBackground = ({ children, background = true }) => (
  <Styled.Container background={background}>
    <SectionContainer>{children}</SectionContainer>
  </Styled.Container>
);

SectionBackground.propTypes = {
  children: P.node.isRequired,
  background: P.bool.isRequired,
};