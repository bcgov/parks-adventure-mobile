import styled from 'styled-components'
import { View, Image, FlatList } from 'react-native'
import { Text } from 'react-native-paper'

export const Container = styled(FlatList)`
  height: 100%;
`

export const ItemContainer = styled(View)`
  border-color: rgba(0, 0, 0, 0.12);
  border-top-width: ${(props) => (props.noTopBorder ? 0 : 1)}px;
  margin-top: ${(props) => (props.noTopBorder ? 10 : 0)}px;
  padding: 6px 0;
  flex-direction: row;
  align-items: center;
`

export const ItemImage = styled(Image)`
  width: 100px;
  height: 68px;
`

export const Title = styled(Text)`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  flex: 1;
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
