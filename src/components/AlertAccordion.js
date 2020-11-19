import React from 'react'
import PropTypes from 'prop-types'
import HTMLContent from './HTMLContent'
import {
  Container,
  Accordion,
  Content,
  Headline,
  HeadlineText,
} from './AlertAccordion.styles'

function AlertAccordion({ headline, description, type = 'alert' }) {
  const [expanded, setExpanded] = React.useState(false)

  const containsDesciption = description && description.match(/\w/)
  const color = type !== 'advisory' ? 'white' : 'black'

  return (
    <Container>
      {containsDesciption ? (
        <Accordion
          testID={'accordion'}
          alert={type !== 'advisory'}
          title={headline}
          expanded={expanded}
          onPress={() => setExpanded(!expanded)}
          titleNumberOfLines={3}
          titleStyle={{
            color,
            fontSize: 14,
            fontFamily: type !== 'advisory' ? 'bcsans-bold' : 'bcsans',
          }}>
          <Content alert={type !== 'advisory'}>
            <HTMLContent content={description} color={color} size={14} />
          </Content>
        </Accordion>
      ) : (
        <Headline alert={type !== 'advisory'}>
          <HeadlineText type={type}>{headline}</HeadlineText>
        </Headline>
      )}
    </Container>
  )
}

AlertAccordion.propTypes = {
  headline: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.string,
}

export default AlertAccordion
