import * as Style from './Title.style';

const Title = (props) => {

  return (
    <Style.Container>
      {/* Insere como título o que for passado */}
      <Style.Title>{props.children}</Style.Title>
      <Style.Hr></Style.Hr>
    </Style.Container>
  );
};

export default Title;
