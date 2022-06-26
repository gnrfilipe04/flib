import React from 'react';
import { Calendar } from './components/Calendar';
import { Header } from './components/Header';
import { DateTimePickerProvider, useDateTimePicker } from './contexts/DateTimePickerContext';

import {
  Container
} from './styles';

interface DateTimePickerProps {
  getDate: (date: Date) => void;
}

export function DateTimePicker({
  getDate
}: DateTimePickerProps){

  return (
    <DateTimePickerProvider>
      <Container>
        <Header getDate={getDate}/>
        <Calendar />
      </Container>
    </DateTimePickerProvider>
  );
}