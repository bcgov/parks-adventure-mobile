import styled from 'styled-components/native'
import { View } from 'react-native'
import { List, Text, Surface } from 'react-native-paper'
import theme from '../utils/theme'

export const Container = styled(Surface)`
  elevation: 4;
`

export const Accordion = styled(List.Accordion)`
  background-color: ${(props) =>
    props.alert ? theme.colors.alert : theme.colors.secondary50};
  color: ${(props) => (props.alert ? 'white' : 'black')};
`

export const Headline = styled(View)`
  background-color: ${(props) =>
    props.alert ? theme.colors.alert : theme.colors.secondary50};
  width: 100%;
  padding: 16px;
`

export const HeadlineText = styled(Text)`
  color: ${(props) => (props.type !== 'advisory' ? 'white' : 'black')};
  font-family: ${(props) =>
    props.type !== 'advisory' ? 'bcsans-bold' : 'bcsans'};
  flex-wrap: wrap;
  text-transform: ${(props) =>
    props.type === 'closure' ? 'capitalize' : 'none'};
`

export const Content = styled(View)`
  background-color: ${(props) =>
    props.alert ? theme.colors.alert : theme.colors.secondary50};
  padding: 15px;
  padding-top: 0;
`
