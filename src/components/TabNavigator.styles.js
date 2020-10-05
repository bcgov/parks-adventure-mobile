import styled from 'styled-components/native'
import { View } from 'react-native'
import { Text } from 'react-native-paper'
import theme from '../utils/theme'

const Label = styled(Text)`
  color: ${(props) => props.color};
  margin-bottom: 3px;
`

const CenterView = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${theme.colors.background};
`

export { Label, CenterView }
