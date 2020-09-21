import React from 'react'
import styled from 'styled-components/native'
import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

const Container = styled(View)`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`

export default function App() {
  return (
    <Container>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </Container>
  )
}
