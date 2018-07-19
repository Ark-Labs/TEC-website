import React from 'react'
import Navbar from 'components/Navbar'
import JoinUsSection from 'components/JoinUsSection'

export const HomepageTemplate = props => (
  <div>
    <Navbar {...props} />
    <JoinUsSection {...props} />
  </div>
)

const Homepage = ({ data }) => {
  const { markdownRemark: post } = data

  return <HomepageTemplate {...post.frontmatter} />
}

export default Homepage

export const HomepageQuery = graphql`
  query Homepage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        logo
        joinUsBackground
        joinUsTitle
        joinUsButtonText
        joinUsButtonURL
      }
    }
  }
`
