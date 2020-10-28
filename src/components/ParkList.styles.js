import styled from 'styled-components'
import { View, Image, FlatList } from 'react-native'
import { Title as PaperTitle, Text } from 'react-native-paper'

export const Container = styled(FlatList)`
  height: 100%;
`

export const ItemContainer = styled(View)`
  border-color: rgba(0, 0, 0, 0.12);
  border-top-width: 1px;
  padding: 6px 0;
  flex-direction: row;
  align-items: stretch;
`

export const ItemImage = styled(Image)`
  width: 100px;
  height: 68px;
`

export const Title = styled(PaperTitle)`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  flex-grow: 1;
  margin-left: 12px;
`

export const DistanceText = styled(Text)`
  font-size: 10px;
  line-height: 16px;
  font-weight: 400;
  text-align: right;
  letter-spacing: 1.5px;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 14px;
`

export const ColumnContainer = styled(View)`
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
`

export const RowContainer = styled(View)`
  flex-direction: row;
`
