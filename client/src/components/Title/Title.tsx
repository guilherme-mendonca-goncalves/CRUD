import * as Style from './Title.style';

interface TitleProps {
  children: any
}

const Title = (props: TitleProps) => {

  return (
    <Style.Container>
      {/* Insere como título o que for passado */}
      <Style.Title>{props.children}</Style.Title>
      <Style.Hr></Style.Hr>
    </Style.Container>
  );
};

export default Title;
