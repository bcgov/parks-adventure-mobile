import styled from 'styled-components/native'
import { View, Pressable } from 'react-native'
import { Searchbar, Text as PaperText, IconButton } from 'react-native-paper'
import theme from '../utils/theme'

export const Header = styled(View)`
  background-color: white;
  min-height: 80px;
  padding: 20px 30px 0 30px;
`

export const Search = styled(Searchbar)`
  border-radius: 10px;
  elevation: 0;
  border: 1px solid #828282;
  height: 37px;
`

export const Content = styled(View)`
  flex-grow: 1;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`

export const ParkCount = styled(PaperText)`
  color: ${theme.colors.grey};
  margin-right: auto;
`

export const FilterButton = styled(Pressable)`
  flex-direction: row;
  position: relative;
  align-items: center;
`

export const Text = styled(PaperText)`
  font-size: 16px;
  opacity: 0.6;
`

export const Icon = styled(IconButton)`
  opacity: 0.6;
  margin-right: -4px;
`

export const Indicator = styled(View)`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${theme.colors.secondary500};
  position: absolute;
  bottom: 13px;
  right: 0;
`
