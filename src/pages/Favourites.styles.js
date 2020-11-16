import styled from 'styled-components/native'
import { SafeAreaView, ScrollView, View } from 'react-native'
import { Headline } from 'react-native-paper'
import theme from '../utils/theme'

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: white;
`

export const Container = styled(View)`
  flex: 1;
  margin: 0 20px;
`

export const Placeholder = styled(ScrollView)`
  opacity: 0.4;
`

export const Text = styled(Headline)`
  color: ${theme.colors.primary};
  text-align: center;
  line-height: 34px;
`

export const FavouriteText = styled(Text)`
  font-family: bcsans-bold;
  color: ${theme.colors.secondary500};
`

export const InlineIcon = styled(View)`
  padding: 0 5px;
`
