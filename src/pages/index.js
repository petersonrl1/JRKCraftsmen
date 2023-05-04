import React from "react"
import Seo from "../components/SEO"
import Banner from "../components/Banner"
import Layout from "../components/Layout"
import Blurb from "../components/Blurb"
import BlurbImage from "../components/BlurbImage"
import ImageCarousel from "../components/ImageCarousel"
import { graphql } from "gatsby"


const HomePage = ({ data }) => {
  const project1Images = data.project1Images.edges

  return (
    <>
      <Seo />
      <Layout>
        <Banner
          content="JRK Craftsmen"
          copy="A construction company specializing in high quality residential remodels and custom woodwork."
        />
        <ImageCarousel images={project1Images} />
      </Layout>
    </>
  )
}

export const query = graphql`
  query {
    project1Images: allFile(
      filter: { relativeDirectory: { eq: "images/project1" } }
    ) {
      edges {
        node {
          id
          childImageSharp {
            gatsbyImageData(width: 3000)
          }
        }
      }
    }
  }
`

export default HomePage
