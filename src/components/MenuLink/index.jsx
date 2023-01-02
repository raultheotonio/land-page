import P from 'prop-types';
import * as Styled from './styles';

export const MenuLink = ({ children, link, newTab = false }) => {
  const target = newTab ? '_blank' : '_self';
  return (
    <Styled.Container href={link} target={target}>
      {children}
    </Styled.Container>
  );
};
MenuLink.propTypes = {
  children: P.node.isRequired,
  link: P.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  newTab: P.bool,
};
