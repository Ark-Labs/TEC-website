import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './all.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>Makers Ark</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:300,400,500,700"
        rel="stylesheet"
      />
    </Helmet>
    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
