import React from 'react'
import PropTypes from 'prop-types'
import HTML from 'react-native-render-html'
import { AllHtmlEntities } from 'html-entities'
import { useTheme } from 'react-native-paper'
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons'
import {
  Container,
  Accordion,
  Content,
  Headline,
  HeadlineText,
} from './AlertAccordion.styles'

const entities = new AllHtmlEntities()

function AlertAccordion({ headline, description, alert = false }) {
  const theme = useTheme()
  const [expanded, setExpanded] = React.useState(false)

  const containsDesciption = description && description.match(/\w/)
  const color = alert ? 'white' : 'black'

  return (
    <Container>
      {containsDesciption ? (
        <Accordion
          testID={'accordion'}
          alert={alert}
          title={entities.decode(headline)}
          expanded={expanded}
          onPress={() => setExpanded(!expanded)}
          titleNumberOfLines={3}
          titleStyle={{
            color,
            fontSize: 14,
            fontFamily: alert ? 'bcsans-bold' : 'bcsans',
          }}>
          <Content alert={alert}>
            <HTML
              html={`<div class='description'>${description}</div>`}
              classesStyles={{ description: { color } }}
              tagsStyles={{
                a: { color: theme.colors.primary },
                li: { paddingTop: 5 },
              }}
              listsPrefixesRenderers={{
                ul: () => {
                  return (
                    <Icon
                      name="circle-medium"
                      color={color}
                      size={12}
                      style={{ paddingTop: 7 }}
                    />
                  )
                },
              }}
            />
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
