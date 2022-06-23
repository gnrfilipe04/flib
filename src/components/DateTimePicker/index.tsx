import React from 'react';
import { Calendar } from './components/Calendar';
import { Header } from './components/Header';

import {
  Container
} from './styles';

export function DateTimePicker(){
  return (
    <Container>
      <Header />
      <Calendar />
    </Container>
  );
}