import React from 'react'
import haversine from 'haversine'
import { DataContext } from '../utils/DataContext'
import ParkList from '../components/ParkList'
import { SafeArea, Container } from './Favourites.styles'

function Favourites() {
  const { parks, location, favoritePark } = React.useContext(DataContext)

  const favoriteParks = parks
    .filter((park) => park.favorited)
    .map((park) => ({
      ...park,
      distance: haversine(location, park.location).toFixed(0),
    }))
    .sort((a, b) => {
      const distanceToA = haversine(location, a.location)
      const distanceToB = haversine(location, b.location)

      return distanceToA - distanceToB
    })

  return (
    <SafeArea>
      <Container>
        <ParkList parks={favoriteParks} onFavoritePress={favoritePark} />
      </Container>
    </SafeArea>
  )
}

export default Favourites
