import * as Style from './Button.style';

interface ButtonProps {
  color?: 'green' | 'blue' | 'gray'
  children: any
  onClick?: () => void
}

const Button = (props: ButtonProps) => {

  return (
    <Style.Container onClick={props.onClick}>
      {props.children}
    </Style.Container>
  );
};

export default Button;
