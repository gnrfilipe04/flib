import React, { useState } from 'react';
import { FieldProps, Input, InputStylesProps } from '../../components/Form/Input/Input';

import {
  Container,
  ContainerLogin
} from './styles';

export function Login(){

  const [value, setValue] = useState('')
  const [valueName, setValueName] = useState('')

  const inputStyle: InputStylesProps = {
    activeColor: '#cc3764',
    disableColor: '#6e6d6d',
    backgroundColor: '#0f1317',
    fontSize: 18,
  }

  let fields: FieldProps[] = [
    { 
      name: 'name',
      label: 'Name',
      value: valueName,
      onChangeValue: setValueName,
      inputStyle: inputStyle,
      type: 'outline',
    },
    { 
      name: 'email',
      label: 'E-mail',
      value: value,
      onChangeValue: setValue,
      inputStyle: inputStyle,
      type: 'outline',
    }
  ]

  return (
    <Container>
        <ContainerLogin>
          <Input
            name='email' 
            type='outline'
            label='E-mail'
            inputStyle={inputStyle}
            value={value}
            onChangeValue={setValue}
          />

          <Input
            name='name' 
            type='outline'
            label='Name'
            inputStyle={inputStyle}
            value={valueName}
            onChangeValue={setValueName}
          />    

        </ContainerLogin>


    </Container>
  );
}