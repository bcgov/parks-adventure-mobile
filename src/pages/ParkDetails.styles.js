import styled from 'styled-components/native'
import { SafeAreaView, View, Image, Dimensions } from 'react-native'
import { Title as PaperTitle, Text, Divider } from 'react-native-paper'
import theme from '../utils/theme'

export const DetailsPage = styled(SafeAreaView)`
  flex: 1;
  background-color: white;
`

export const ParkHeader = styled(View)`
  position: relative;
`

export const ParkImage = styled(Image)`
  width: 100%;
  height: 180px;
`

export const BlackTransparentOverlay = styled(View)`
  z-index: 1;
  position: absolute;
  background-color: ${theme.colors.grey};
  opacity: 0.5;
  height: 100%;
  width: 100%;
`

export const TitleSection = styled(View)`
  margin: 20px;
`

export const TitleRow = styled(View)`
  width: 100%;
  flex-direction: row;
  align-items: center;
`

export const Title = styled(PaperTitle)`
  width: ${Dimensions.get('window').width - 60}px;
`

export const Subtitle = styled(Text)`
  padding-top: 5px;
  padding-left: 5px;
  opacity: 0.6;
`

export const InformationSection = styled(View)`
  margin: 20px;
  margin-top: 0;
`

export const SectionDivider = styled(Divider)`
  margin: 10px 0 30px 0;
`

export const ClippedText = styled(Text)`
  margin-top: ${(props) => (props.marginTop ? 30 : 0)}px;
  font-size: 16px;
`

export const Link = styled(Text)`
  font-size: 16px;
  text-decoration: underline;
  color: ${theme.colors.primary};
  margin: 10px 0;
`

export const FeesSection = styled(View)`
  background-color: ${theme.colors.surface};
  padding: 20px;
  padding-bottom: 10px;
`

export const FeesDividerTop = styled(Divider)`
  margin: 0 20px;
`

export const FeesDividerBottom = styled(Divider)`
  margin: 0 20px;
  margin-bottom: 20px;
`
