import styled from 'styled-components/native'
import { View } from 'react-native'
import theme from '../utils/theme'

export const CenterView = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${theme.colors.background};
  padding: 20px;
  padding-bottom: 0;
`
