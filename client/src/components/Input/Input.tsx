import * as Style from './Input.style';

interface InputProps {
  type?: 'text' | 'number'
  text: string
  value: any
  readOnly?: boolean
  onChange?: (value: any) => void
}

const Input = (props: InputProps) => {

  return (
    <Style.Container>
      <Style.Label>
        {props.text}
      </Style.Label>
      <Style.Input
        type={props.type ?? 'text'}
        value={props.value}
        readOnly={props.readOnly}
        onChange={e => props.onChange?.(e.target.value)}
      />
    </Style.Container>
  );
};

export default Input;
