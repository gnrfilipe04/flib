import React from 'react';
import { Calendar } from './components/Calendar';
import { Header } from './components/Header';
import { DateTimePickerProvider, useDateTimePicker } from './contexts/DateTimePickerContext';

import {
  Container
} from './styles';

export function DateTimePicker(){

  return (
    <DateTimePickerProvider>
      <Container>
        <Header />
        <Calendar />
      </Container>
    </DateTimePickerProvider>
  );
}