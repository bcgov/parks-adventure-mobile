import React from 'react'
import styled from 'styled-components/native'
import PropTypes from 'prop-types'
import { Card } from 'react-native-paper'
import ParksText from './ParksText'

const ParkTitle = styled(ParksText)`
  margin-top: 15px;
  font-weight: bold;
`

const CarouselCard = ({ title, uri, distance, warning }) => (
  <Card>
    {warning && <ParkTitle>{warning.title}</ParkTitle>}
    <Card.Cover source={{ uri }} />
    <Card.Content>
      <ParkTitle>{title}</ParkTitle>
      <ParksText>{`${distance}km`}</ParksText>
    </Card.Content>
  </Card>
)

CarouselCard.propTypes = {
  title: PropTypes.string,
  uri: PropTypes.string,
  distance: PropTypes.number,
  warning: PropTypes.object,
}

export default CarouselCard
