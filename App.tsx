import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { DateTime } from './src/screens/DateTime';
import { Login } from './src/screens/Login';
import { SharedElementExample } from './src/screens/SharedElementExample';
import {TimePickerExample} from './src/screens/TimePickerExample';

export default function App() {
  return (
    <>
      <StatusBar 
            style='light'
            backgroundColor='transparent'
            translucent
        />
      <SharedElementExample />
    </>
  );
}
