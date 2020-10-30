import styled from 'styled-components/native'
import { View, ScrollView } from 'react-native'
import { Text, Button, Surface } from 'react-native-paper'

export const FilterContainer = styled(View)`
  flex: 1;
  background-color: white;
  padding-bottom: 70px;
`

export const Header = styled(View)`
  height: 50px;
  justify-content: center;
  padding: 0 10px;
  border-bottom-width: 1px;
  border-style: solid;
  border-bottom-color: rgba(0, 0, 0, 0.12);
`

export const FilterScrollView = styled(ScrollView)`
  padding: 10px;
`

export const Section = styled(View)`
  margin: 30px 0;
`

export const FilterTitle = styled(Text)`
  font-family: bcsans-bold;
  font-size: 18px;
  margin-bottom: 20px;
`

export const DistanceMarker = styled(View)`
  align-items: center;
  position: relative;
`

export const DistanceText = styled(Text)`
  color: white;
  position: absolute;
  top: 9px;
  font-size: 10px;
`

export const Footer = styled(View)`
  height: 70px;
  width: 100%;
  border-top-width: 1px;
  border-style: solid;
  border-top-color: rgba(0, 0, 0, 0.12);
  position: absolute;
  bottom: 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: white;
`

export const SelectionCountContainer = styled(Surface)`
  elevation: 2;
  border-radius: 4px;
`

export const SelectionCountButton = styled(Button)`
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  elevation: 0;
`
