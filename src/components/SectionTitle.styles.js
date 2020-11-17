import styled from 'styled-components/native'
import { View, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'

export const Container = styled(View)`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;
`

export const Icon = styled(MCIcon)`
  padding-top: 2px;
`

export const Title = styled(Text)`
  font-family: bcsans-bold;
  padding-left: 15px;
  font-size: 18px;
`

export const Button = styled(TouchableOpacity)`
  margin-left: auto;
  flex-direction: row;
`

export const LinkText = styled(Text)`
  text-decoration: underline;
  padding-right: 5px;
`

export const LinkIcon = styled(MCIcon)`
  margin-top: 2px;
`
