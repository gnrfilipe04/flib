import React from 'react';
import { DateTimePicker } from '../../components/DateTimePicker';

import {
  Container
} from './styles';

export function DateTime(){
  return (
    <Container>
        <DateTimePicker getDate={(date) => console.log('DATE', date)}/>
    </Container>
  );
}