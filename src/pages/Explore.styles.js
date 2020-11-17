import styled from 'styled-components/native'
import {
  SafeAreaView,
  View,
  ScrollView,
  FlatList,
  ImageBackground,
  Image,
} from 'react-native'

export const ExplorePage = styled(SafeAreaView)`
  flex: 1;
  background-color: white;
`

export const ExploreScrollView = styled(ScrollView)`
  flex: 1;
`

export const ExploreHeader = styled(ImageBackground)`
  width: 100%;
  height: 140px;
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`

export const RisingSun = styled(Image)`
  width: 64px;
  height: 34px;
  align-self: flex-end;
  margin-top: -5px;
  margin-bottom: 5px;
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
