import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const GridTwoColumn = ({ title, text, background, srcImg }) => (
  <SectionBackground background={background}>
    <Styled.Container>
      <Styled.TextContainer>
        <Heading uppercase colorDark={!background} as="h2">
          {text}
        </Heading>
        <TextComponent>{text}</TextComponent>
      </Styled.TextContainer>
      <Styled.ImageContainer>
        <Styled.Image src={srcImg} alt={title} />
      </Styled.ImageContainer>
    </Styled.Container>
  </SectionBackground>
);

GridTwoColumn.propTypes = {
  title: P.string.isRequired,
  text: P.string.isRequired,
  background: P.bool,
  srcImg: P.string.isRequired,
};
