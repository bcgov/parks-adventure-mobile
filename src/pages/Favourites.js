import React from 'react'
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons'
import { useTheme } from 'react-native-paper'
import { DataContext } from '../utils/DataContext'
import { sortParks, addDistanceToParks } from '../utils/helpers'
import ParkList from '../components/ParkList'
import LocationBanner from '../components/LocationBanner'
import {
  SafeArea,
  Container,
  Placeholder,
  Text,
  FavouriteText,
  InlineIcon,
} from './Favourites.styles'

function Favourites() {
  const theme = useTheme()
  const { parks, location, favoritePark } = React.useContext(DataContext)

  const favoriteParks = parks
    .filter((park) => park.favorited)
    .map((park) => addDistanceToParks(location, park))
    .sort((a, b) => sortParks(location, a, b))

  return (
    <SafeArea>
      <LocationBanner />

      <Container locationNotAvailable={!location}>
        {favoriteParks.length > 0 ? (
          <ParkList parks={favoriteParks} onFavoritePress={favoritePark} />
        ) : (
          <Placeholder
            showsVerticalScrollIndicator={false}
            alwaysBounceVertical={false}
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: 'center',
            }}>
            <Text>
              <Text>Your </Text>
              <FavouriteText>Favourite</FavouriteText>
              <Text>
                {' '}
                parks live here for easy access. Add parks by tapping the
              </Text>
              <InlineIcon>
                <Icon
                  name="heart-outline"
                  color={theme.colors.secondary500}
                  size={24}
                  allowFontScaling={true}
                />
              </InlineIcon>
              <Text>on their cards or details page.</Text>
            </Text>
          </Placeholder>
        )}
      </Container>
    </SafeArea>
  )
}

export default Favourites
