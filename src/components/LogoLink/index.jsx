import P from 'prop-types';
import * as Styled from './styles';
import { Heading } from '../Heading';

export const LogoLink = ({ text, srcImg = '', link }) => {
  const isImage = () => (srcImg ? <img src={srcImg} alt={text} /> : text);
  return (
    <Heading size="small" uppercase>
      <Styled.Container href={link}>{isImage()}</Styled.Container>
    </Heading>
  );
};

LogoLink.propTypes = {
  text: P.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  srcImg: P.string,
  link: P.string.isRequired,
};
