import React from 'react'
import PropTypes from 'prop-types'
import { HomepageTemplate } from 'templates/homepage'
import { StyleSheetManager } from 'styled-components'

const HomepagePreview = ({ entry, widgetFor }) => {
  const iframe = document.querySelector('.nc-previewPane-frame')
  const iframeHeadElem = iframe.contentDocument.head

  return (
    <StyleSheetManager target={iframeHeadElem}>
      <HomepageTemplate
        logo={entry.getIn(['data', 'logo'])}
        joinUsBackground={entry.getIn(['data', 'joinUsBackground'])}
        joinUsTitle={entry.getIn(['data', 'joinUsTitle'])}
        joinUsButtonText={entry.getIn(['data', 'joinUsButtonText'])}
        joinUsButtonURL={entry.getIn(['data', 'joinUsButtonURL'])}
      />
    </StyleSheetManager>
  )
}

HomepagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
}

export default HomepagePreview
