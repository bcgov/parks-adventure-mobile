import styled from 'styled-components/native'
import { Surface, Text } from 'react-native-paper'
import theme from '../utils/theme'

export const Banner = styled(Surface)`
  background-color: ${theme.colors.error};
  padding: 15px;
  top: 60px;
`

export const Message = styled(Text)`
  font-family: bcsans-bold;
  color: white;
`
