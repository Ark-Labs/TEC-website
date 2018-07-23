import React from 'react'
import Navbar from 'components/Navbar'
import JoinUsSection from 'components/JoinUsSection'
import EconomySection from 'components/EconomySection'
import FAQSection from 'components/FAQSection'
import ProductSection from 'components/ProductSection'

export const HomepageTemplate = props => (
  <div>
    <Navbar {...props} />
    <JoinUsSection {...props} />
    <EconomySection {...props} />
    <FAQSection {...props} />
    <ProductSection {...props} />
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
        economyBackground
        economyTitle
        economyUpperText
        economyColumns {
          title
          body
        }
        economyLowerText
        economyButtonText
        economyButtonURL
        faqBackground
        faqTitle
        faqQuestions {
          question
          answer
        }
        productTitle
        productLogo
        productSubtitle
        productBody
        productPanels {
          image
          text
          url
        }
      }
    }
  }
`
