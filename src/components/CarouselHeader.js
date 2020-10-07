import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { Container, Icon, Title, Subheading } from './CarouselHeader.styles'

const CarouselHeader = (props) => (
  <Container>
    <Icon source={require('../images/icons/activity/climbing.png')} />
    <View>
      <Title>{props.title}</Title>
      <Subheading>{props.subheading}</Subheading>
    </View>
  </Container>
)

CarouselHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
}

export default CarouselHeader
