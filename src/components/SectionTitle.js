import React from 'react'
import PropTypes from 'prop-types'
import { Linking } from 'react-native'
import NatureAndCulture from './../../assets/NatureAndCulture.svg'
import SafetyInfo from './../../assets/SafetyInfo.svg'
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
    {icon === 'nature' ? (
      <NatureAndCulture height={16} width={16} />
    ) : icon === 'first-aid' ? (
      <SafetyInfo height={16} width={16} />
    ) : (
      <Icon name={icon} size={20} />
    )}
    <Title>{title}</Title>
    {link && (
      <Button uppercase={false} onPress={() => Linking.openURL(link)}>
        <LinkText>More info</LinkText>
        <LinkIcon name="open-in-new" size={14} allowFontScaling={true} />
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
