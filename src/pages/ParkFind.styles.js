import styled from 'styled-components/native'
import { View } from 'react-native'

export const ParkFindPage = styled(View)`
  flex: 1;
  background-color: white;
  margin-top: ${(props) => (props.locationNotAvailable ? 60 : 0)}px;
`

export const ParkListContainer = styled(View)`
  margin: 0 20px 100px 20px;
`
