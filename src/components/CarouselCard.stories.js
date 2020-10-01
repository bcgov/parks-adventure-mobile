import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { View } from 'react-native'
import styled from 'styled-components/native'

import CarouselCard from './CarouselCard'

const StoryView = styled(View)`
  margin: 20px;
`

storiesOf('CarouselCard', module).add('Default', () => (
  <StoryView>
    <CarouselCard
      title={'BC Parks'}
      uri={'https://picsum.photos/700'}
      distance={26}
    />
  </StoryView>
))
