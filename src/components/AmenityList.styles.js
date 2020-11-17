import styled from 'styled-components/native'
import { View } from 'react-native'
import { Text as PaperText, Divider as PaperDivider } from 'react-native-paper'
import theme from '../utils/theme'

export const List = styled(View)`
  margin-bottom: 30px;
  padding-top: 20px;
`

export const Item = styled(View)`
  flex-direction: row;
  align-items: center;
`

export const Text = styled(PaperText)`
  font-size: 16px;
  margin-left: 20px;
  color: ${theme.colors.primary};
`

export const Divider = styled(PaperDivider)`
  margin: 12px 0;
`
