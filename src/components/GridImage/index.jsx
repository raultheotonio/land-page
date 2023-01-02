import P from 'prop-types';
import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent';
import * as Styled from './styles';

export const GridImage = ({ background = false, title, description, grid }) => (
  <SectionBackground background={background}>
    <Styled.Container>
      <Heading size="huge" uppercase colorDark={!background} as="h2">
        {title}
      </Heading>
      <TextComponent>{description}</TextComponent>
      <Styled.Grid>
        {grid.map((el) => (
          <Styled.GridElement key={el.srcImg}>
            <Styled.Image src={el.srcImg} alt={el.altText} />
          </Styled.GridElement>
        ))}
      </Styled.Grid>
    </Styled.Container>
  </SectionBackground>
);

GridImage.propTypes = {
  title: P.string.isRequired,
  description: P.string.isRequired,
  background: P.bool,
  grid: P.arrayOf(
    P.shape({
      altText: P.string.isRequired,
      srcImg: P.string.isRequired,
    })
  ).isRequired,
};
