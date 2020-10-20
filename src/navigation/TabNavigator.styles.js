import styled from 'styled-components/native'
import { Text } from 'react-native-paper'

export const Label = styled(Text)`
  color: ${(props) => props.color};
  margin-bottom: 3px;
`
