import styled from 'styled-components/native'
import {
  Card,
  Text as PaperText,
  Snackbar as PaperSnackbar,
} from 'react-native-paper'
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'

export const Button = styled(Card)`
  background-color: white;
  border-radius: 8px;
  height: 64px;
  width: 64px;
  ${(props) => (props.absolute ? 'position: absolute;' : null)};
  ${(props) => (props.absolute ? 'right: 16px;' : null)};
  ${(props) => (props.absolute ? 'top: 100px;' : null)};
  ${(props) => (!props.absolute ? 'margin: 10px 0 20px 0;' : null)};
  align-items: center;
  padding-top: 15px;
`

export const Icon = styled(MCIcon)`
  align-self: center;
  opacity: 0.6;
`

export const Text = styled(PaperText)`
  opacity: 0.6;
`

export const Snackbar = styled(PaperSnackbar)`
  bottom: 50px;
`
