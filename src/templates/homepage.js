import React from 'react'
import Navbar from 'components/Navbar'
import JoinUsSection from 'components/JoinUsSection'
import EconomySection from 'components/EconomySection'
import FAQSection from 'components/FAQSection'
import ProductSection from 'components/ProductSection'
import PerksSection from 'components/PerksSection'
import CompanySection from 'components/CompanySection'
import DPoSSection from 'components/DPoSSection'
import NewsletterSection from 'components/NewsletterSection'
import RoadmapSection from 'components/RoadmapSection'
import DistributionSection from 'components/DistributionSection'
import TeamSection from 'components/TeamSection'
import PartnersSection from 'components/PartnersSection'
import ContactSection from 'components/ContactSection'
import Footer from 'components/Footer'

export const HomepageTemplate = props => (
  <div>
    <Navbar {...props} />
    <JoinUsSection {...props.joinUs} />
    <EconomySection {...props.economy} />
    <FAQSection {...props.faq} />
    <ProductSection {...props.product} />
    <PerksSection {...props.perks} />
    <CompanySection {...props.company} />
    <DPoSSection {...props.dpos} />
    <NewsletterSection {...props.newsletter} />
    <RoadmapSection {...props.roadmap} />
    <DistributionSection {...props.distribution} />
    <TeamSection {...props.team} />
    <PartnersSection {...props.partners} />
    <ContactSection {...props.contact} />
    <Footer {...props} />
  </div>
)

const Homepage = ({ data }) => {
  const { markdownRemark: post } = data

  return <HomepageTemplate {...post.frontmatter} />
}

export default Homepage

// eslint-disable-next-line
export const HomepageQuery = graphql`
  query Homepage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        logo
        copyright
        joinUs {
          logo
          backgroundImage
          title
          button {
            children
            color
            background
            href
          }
        }
        economy {
          backgroundImage
          title
          upperText
          columns {
            title
            body
          }
          lowerText
          button {
            children
            color
            background
            href
          }
        }
        faq {
          title
          backgroundImage
          expandIcon
          questions {
            question
            answer
          }
        }
        product {
          title
          subtitle
          logo
          body
          panels {
            image
            text
            url
          }
        }
        perks {
          title
          columns {
            image
            title
            text
          }
        }
        company {
          title
          body
          logo
          panels {
            progress
            title
            text
          }
        }
        dpos {
          title
          body
          backgroundImage
          button {
            children
            color
            background
            href
          }
        }
        newsletter {
          title
          backgroundImage
        }
        roadmap {
          title
          events {
            date
            text
            past
          }
        }
        distribution {
          title
          distribution {
            name
            value
            color
          }
          tranches {
            name
            value
          }
        }
        team {
          title
          members {
            name
            image
            description
          }
        }
        partners {
          title
          partners {
            image
            href
          }
        }
        contact {
          title
          address
          socialLinks {
            image
            href
          }
        }
      }
    }
  }
`
