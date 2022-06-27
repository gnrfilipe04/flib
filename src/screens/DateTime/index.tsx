import React from 'react';
import { DatePicker } from '../../components/DatePicker';

import {
  Container
} from './styles';

export function DateTime(){
  return (
    <Container>
        <DatePicker getDate={(date) => console.log('DATE', date)}/>
    </Container>
  );
}