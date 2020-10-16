import styled from 'styled-components/native'
import { View } from 'react-native'
import { Text, Card } from 'react-native-paper'

export const Carousel = styled(Card)`
  border-radius: 13px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 220px;
  width: 260px;
`

export const CardCover = styled(Card.Cover)`
  height: 135px;
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
`

export const ParkTitle = styled(Text)`
  font-weight: bold;
  width: 90%;
`

export const CardContent = styled(Card.Content)`
  margin-top: 15px;
  flex: 1;
`

export const ContentLine = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const ParkDistance = styled(Text)`
  position: absolute;
  bottom: 15px;
  right: 15px;
  font-size: 12px;
  opacity: 0.6;
`
