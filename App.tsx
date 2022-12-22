
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { DateTime } from './src/screens/DateTime';
import { Login } from './src/screens/Login';
import { SharedElementExample } from './src/screens/SharedElementExample';
import {TimePickerExample} from './src/screens/TimePickerExample';
import { NeuButton } from './src/components/Neumorphism/Button';
import { FlatList, Text, View } from 'react-native';
import Item from './src/components/Item/Item';
import { ViewPage } from './src/screens/ViewPage';

export default function App() {
  return (
    <>
      <StatusBar 
            style='light'
            backgroundColor='transparent'
            translucent
        />
      <ViewPage />      
    </>
  );
}
