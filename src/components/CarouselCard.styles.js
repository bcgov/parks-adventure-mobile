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
  position: relative;
`

export const CardBanner = styled(View)`
  background-color: ${(props) =>
    props.closure
      ? theme.colors.error
      : props.alert
      ? theme.colors.alert
      : theme.colors.secondary50};
  height: 30px;
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
`

export const BlackTransparentOverlay = styled(View)`
  background-color: ${theme.colors.grey};
  opacity: 0.5;
  height: 100%;
  width: 100%;
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  position: absolute;
`

export const AdvisoryText = styled(Text)`
  min-height: 30px;
  line-height: 32px;
  text-align: center;
  color: ${(props) => (props.alert || props.closure ? 'white' : 'black')};
  padding: 0 16px;
  text-transform: ${(props) => (props.closure ? 'uppercase' : 'none')};
`

export const ParkTitle = styled(Text)`
  font-weight: bold;
  width: 90%;
`

export const CardContent = styled(Card.Content)`
  margin-top: 15px;
  flex: 1;
  justify-content: space-between;
`

export const ContentLine = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const ParkDistance = styled(Text)`
  font-size: 12px;
  opacity: 0.6;
`
