import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { Container, Icon, Title, Subheading } from './CarouselHeader.styles'

const CarouselHeader = ({ title, subheading, icon }) => (
  <Container>
    <Icon source={icon} />
    <View>
      <Title>{title}</Title>
      <Subheading>{subheading}</Subheading>
    </View>
  </Container>
)

CarouselHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
  icon: PropTypes.number.isRequired,
}

export default CarouselHeader
