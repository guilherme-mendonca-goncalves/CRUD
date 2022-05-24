import { Client } from '@src/core';
import { useState } from 'react';
import Button from '../Button';
import Input from '../Input';
import * as Style from './Form.style';

interface FormProps {
  client: Client
  onChange?: (client: Client) => void
  cancel?: () => void
}

const Form = (props: FormProps) => {
  const id = props.client?.idclients;
  const [name, setName] = useState(props.client?.name ?? '');
  const [age, setAge] = useState(props.client?.age ?? 0);

  return (
    <Style.Container>
      {id ? (
        <Input readOnly text='ID' value={id} />
      ) : false}
      <Input text='Nome' value={name} onChange={setName} />
      <Input text='Idade' type='number' value={age} onChange={setAge} />
      <Style.DivButton>
        <Button onClick={() => props.onChange?.(new Client(name, +age, id))}> {id ? 'Alterar' : 'Adicionar'} </Button>
        <Button onClick={props.cancel}>Cancelar</Button>
      </Style.DivButton>
    </Style.Container>
  );
};

export default Form;
