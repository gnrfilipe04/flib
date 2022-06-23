import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { DateTime } from './src/screens/DateTime';
import { Login } from './src/screens/Login';

export default function App() {
  return (
    <>
      <StatusBar 
            style='light'
            backgroundColor='transparent'
            translucent
        />
      <DateTime />
    </>
  );
}
