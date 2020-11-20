import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { getAmenityIcon } from '../images/svgs/amenities'
import { Container, Title, Subheading } from './CarouselHeader.styles'

const CarouselHeader = ({ title, subheading, icon }) => (
  <Container>
    {getAmenityIcon(icon, true, 43)}
    <View style={{ paddingLeft: 8 }}>
      <Title>{title}</Title>
      <Subheading>{subheading}</Subheading>
    </View>
  </Container>
)

CarouselHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}

export default CarouselHeader
