import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import { Text } from 'react-native'

const BCSansText = styled(Text)`
  font-family: ${(props) => props.fontFamily};
`

const ParksText = ({ style, children }) => {
  /**
   *  Parses out bold and italic styling to compose the correct font-family
   *  for custom text font.
   */
  const filteredStyle = !style ? undefined : [{}]
  let fontFamily = 'bcsans'
  if (style) {
    Object.keys(style[0]).forEach((key) => {
      if (
        key === 'fontWeight' &&
        (style[0].fontWeight === 'bold' || style[0].fontWeight > 400)
      ) {
        fontFamily = fontFamily + '-bold'
      } else if (key === 'fontStyle' && style[0].fontStyle === 'italic') {
        fontFamily = fontFamily + '-italic'
      } else {
        filteredStyle[0][key] = style[0][key]
      }
    })
  }
  return (
    <BCSansText style={filteredStyle} fontFamily={fontFamily}>
      {children}
    </BCSansText>
  )
}

ParksText.propTypes = {
  style: PropTypes.array,
  children: PropTypes.string,
}

export default ParksText
