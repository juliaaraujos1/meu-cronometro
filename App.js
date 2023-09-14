import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card, Avatar, Button } from 'react-native-paper';
import Cronometro from './semana06/Cronometro';



export default function App() {

  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />


  return (
    
    <Cronometro />

  )

  }
