import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from 'react-native-paper'
import HTML from 'react-native-render-html'
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'

function HTMLContent({ content, color = 'black', size = 16, onLinkPress }) {
  const theme = useTheme()

  return (
    <HTML
      html={`<div class='htmlContent'>${content}</div>`}
      onLinkPress={onLinkPress}
      classesStyles={{ htmlContent: { color } }}
      baseFontStyle={{ fontSize: size, fontFamily: 'bcsans' }}
      ignoredTags={['img']}
      tagsStyles={{
        p: { paddingTop: 0, paddingBottom: 10 },
        a: { color: theme.colors.primary },
        li: { paddingTop: 5, fontSize: size },
        h5: { margin: 0 },
        strong: { fontFamily: 'bcsans-bold' },
      }}
      listsPrefixesRenderers={{
        ul: () => {
          return (
            <MCIcon
              name="circle-medium"
              color={color}
              size={12}
              style={{ paddingTop: size === 14 ? 8 : 10, paddingRight: 2 }}
              allowFontScaling={true}
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
  onLinkPress: PropTypes.func,
}

export default HTMLContent
