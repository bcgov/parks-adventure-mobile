import React from 'react'
import PropTypes from 'prop-types'
import { Linking } from 'react-native'
import {
  Container,
  Icon,
  Title,
  Button,
  LinkText,
  LinkIcon,
} from './SectionTitle.styles'

const SectionTitle = ({ title, icon, link }) => (
  <Container>
    <Icon name={icon} size={18} />
    <Title>{title}</Title>
    {link && (
      <Button uppercase={false} onPress={() => Linking.openURL(link)}>
        <LinkText>More info</LinkText>
        <LinkIcon name="open-in-new" size={14} />
      </Button>
    )}
  </Container>
)

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  link: PropTypes.string,
}

export default SectionTitle
