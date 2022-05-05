import Title from '../Title';
import * as Style from './Layout.style';

interface LayoutProps {
  title: string,
  children: any
}

const Layout = (props: LayoutProps) => {

  return (
    <>
      <Style.Container>
        <Title>{props.title}</Title>
        <Style.Container2>
          {props.children}
        </Style.Container2>
      </Style.Container>
    </>
  );
};

export default Layout;
