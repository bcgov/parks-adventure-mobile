import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { View } from 'react-native'
import styled from 'styled-components/native'

import CarouselCard from './CarouselCard'

const StoryView = styled(View)`
  margin: 40px 20px;
`

storiesOf('CarouselCard', module)
  .add('Not favourited', () => (
    <StoryView>
      <CarouselCard
        title={'&#573;&#193;U,WELN&#817;EW&#817;/John Dean Provincial Park'}
        uri={'https://picsum.photos/id/1043/5184/3456'}
        distance={'26'}
      />
    </StoryView>
  ))
  .add('Favourited with no image', () => (
    <StoryView>
      <CarouselCard
        title={'Shuswap Lake Marine Park'}
        distance={'304'}
        favorited={true}
      />
    </StoryView>
  ))
