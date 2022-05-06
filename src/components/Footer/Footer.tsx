import * as Style from './Footer.style';

interface FooterProps {
  children: any
}

const Footer = (props: FooterProps) => {

  return (
    <Style.Container>
      {props.children}
    </Style.Container>
  );
};

export default Footer;
