import styled from 'styled-components/native'
import { Image, View } from 'react-native'
import { Text } from 'react-native-paper'
import theme from '../utils/theme'

export const Container = styled(View)`
  flex-direction: row;
  align-items: center;
  margin: 0 10px 8px 10px;
`

export const Icon = styled(Image)`
  width: 43px;
  height: 43px;
  margin: 0 15px;
`

export const Title = styled(Text)`
  line-height: 23px;
  font-size: 18px;
  color: ${(props) => (props.selected ? 'black' : theme.colors.disabled)};
  flex: 1;
  margin-left: 30px;
`

export const Selection = styled(View)`
  border: 2px;
  border-style: solid;
  border-color: ${(props) => (props.selected ? theme.colors.primary : 'black')};
  border-radius: 4px;
  background-color: ${(props) =>
    props.selected ? theme.colors.primary : 'white'};
  height: 28px;
  width: 28px;
  justify-content: center;
  align-items: center;
`
