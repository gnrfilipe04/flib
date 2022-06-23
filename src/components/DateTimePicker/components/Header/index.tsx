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
import { TouchableOpacity } from 'react-native';
import { useDateTimePicker } from '../../contexts/DateTimePickerContext';

export function Header(){
  const { dateSelected }  = useDateTimePicker()

  return (
    <Container>
        
        <Top>
            <AntDesign name="close" size={20} color="white" />
            <TouchableOpacity onPress={() => console.log(dateSelected)}>
              <Save>Salvar</Save>
            </TouchableOpacity>
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