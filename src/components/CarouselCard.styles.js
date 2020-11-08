import styled from 'styled-components/native'
import { View, ImageBackground } from 'react-native'
import { Text, Card } from 'react-native-paper'
import theme from '../utils/theme'

export const Carousel = styled(Card)`
  height: 220px;
  width: 260px;
  border-radius: 13px;
`

export const CardCover = styled(ImageBackground)`
  height: 135px;
`

export const CardBanner = styled(View)`
  background-color: ${(props) =>
    props.alert ? theme.colors.alert : theme.colors.secondary50};
  height: 30px;
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
`

export const AdvisoryText = styled(Text)`
  line-height: 32px;
  text-align: center;
  color: ${(props) => (props.alert ? 'white' : 'black')};
  padding: 0 16px;
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
