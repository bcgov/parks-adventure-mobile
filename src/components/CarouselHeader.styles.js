import styled from 'styled-components/native'
import { View } from 'react-native'
import {
  Title as PaperTitle,
  Subheading as PaperSubheading,
} from 'react-native-paper'

export const Container = styled(View)`
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
`

export const Title = styled(PaperTitle)`
  line-height: 23px;
`

export const Subheading = styled(PaperSubheading)`
  font-size: 14px;
  line-height: 20px;
`
