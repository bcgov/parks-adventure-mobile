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

function AlertAccordion({ headline, description, alert = false }) {
  const [expanded, setExpanded] = React.useState(false)

  const containsDesciption = description && description.match(/\w/)
  const color = alert ? 'white' : 'black'

  return (
    <Container>
      {containsDesciption ? (
        <Accordion
          testID={'accordion'}
          alert={alert}
          title={headline}
          expanded={expanded}
          onPress={() => setExpanded(!expanded)}
          titleNumberOfLines={3}
          titleStyle={{
            color,
            fontSize: 14,
            fontFamily: alert ? 'bcsans-bold' : 'bcsans',
          }}>
          <Content alert={alert}>
            <HTMLContent content={description} color={color} size={14} />
          </Content>
        </Accordion>
      ) : (
        <Headline>
          <HeadlineText>{headline}</HeadlineText>
        </Headline>
      )}
    </Container>
  )
}

AlertAccordion.propTypes = {
  headline: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  alert: PropTypes.bool,
}

export default AlertAccordion
