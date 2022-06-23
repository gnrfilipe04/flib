import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import {
  Container, 
  Save,
  Top,
  Bottom,
  SelectDate,
  SelectDateTitle,
  SelectDateValue
} from './styles';

export function Header(){
  return (
    <Container>
        
        <Top>
            <AntDesign name="close" size={20} color="white" />
            <Save>Salvar</Save>
        </Top>

        <Bottom>
            <SelectDate>
                <SelectDateTitle>Data selecionada</SelectDateTitle>
                <SelectDateValue>20 Jun</SelectDateValue>
            </SelectDate>
            <MaterialIcons name="edit" size={30} color="white" />
        </Bottom>
    </Container>
  );
}