import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from 'react-native-paper'
import HTML from 'react-native-render-html'
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'

function HTMLContent({ content, color = 'black', size = 16 }) {
  const theme = useTheme()

  return (
    <HTML
      html={`<div class='htmlContent'>${content}</div>`}
      classesStyles={{ htmlContent: { color } }}
      baseFontStyle={{ fontSize: size, fontFamily: 'bcsans' }}
      tagsStyles={{
        a: { color: theme.colors.primary },
        li: { paddingTop: 5, fontSize: size },
        h5: { margin: 0 },
      }}
      listsPrefixesRenderers={{
        ul: () => {
          return (
            <MCIcon
              name="circle-medium"
              color={color}
              size={12}
              style={{ paddingTop: size === 14 ? 8 : 10, paddingRight: 2 }}
            />
          )
        },
      }}
    />
  )
}

HTMLContent.propTypes = {
  content: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
}

export default HTMLContent
