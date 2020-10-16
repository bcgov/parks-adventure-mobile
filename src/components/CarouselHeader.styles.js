import styled from 'styled-components/native'
import { Image, View } from 'react-native'
import {
  Title as PaperTitle,
  Subheading as PaperSubheading,
} from 'react-native-paper'

export const Container = styled(View)`
  flex-direction: row;
  align-items: center;
`

export const Icon = styled(Image)`
  width: 43px;
  height: 43px;
  margin: 0 15px;
`

export const Title = styled(PaperTitle)`
  line-height: 23px;
`

export const Subheading = styled(PaperSubheading)`
  font-size: 14px;
  line-height: 20px;
`
