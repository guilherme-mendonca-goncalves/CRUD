import * as Style from './Button.style';

interface ButtonProps {
  color?: 'green' | 'blue' | 'gray'
  children: any
}

const Button = (props: ButtonProps) => {

  return (
    <Style.Container>
      {props.children}
    </Style.Container>
  );
};

export default Button;
