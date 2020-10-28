import styled from 'styled-components/native'
import { SafeAreaView, View, ScrollView, FlatList } from 'react-native'

export const ExplorePage = styled(SafeAreaView)`
  flex: 1;
  background-color: white;
`

export const ExploreScrollView = styled(ScrollView)`
  flex: 1;
`

export const ExploreHeader = styled(View)`
  padding-top: 35px;
`

export const ExploreSection = styled(FlatList)`
  margin-bottom: 20px;
  padding-bottom: 5px;
  padding-top: 10px;
`

export const ParkCardContainer = styled(View)`
  margin-left: ${(props) => (props.index === 0 ? 10 : 0)}px;
  margin-right: ${(props) => (props.index === props.length - 1 ? 10 : 0)}px;
  padding: 10px;
`
