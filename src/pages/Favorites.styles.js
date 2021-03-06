import styled from 'styled-components/native'
import { ScrollView, View } from 'react-native'
import { Headline } from 'react-native-paper'
import theme from '../utils/theme'

export const FavoritePage = styled(View)`
  flex: 1;
  background-color: white;
`

export const Container = styled(View)`
  flex: 1;
  margin: 0 20px;
  margin-top: ${(props) => (props.locationNotAvailable ? 60 : 0)}px;
`

export const Placeholder = styled(ScrollView)`
  opacity: 0.4;
`

export const Text = styled(Headline)`
  color: ${theme.colors.primary};
  text-align: center;
  line-height: 34px;
`

export const FavoriteText = styled(Text)`
  font-family: bcsans-bold;
  color: ${theme.colors.secondary500};
`

export const InlineIcon = styled(View)`
  padding: 0 5px;
`
