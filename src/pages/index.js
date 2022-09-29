import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/SEO"
import BlogItem from "../components/BlogItem"
import styled from "styled-components"
import Banner from "../components/Banner"
import Layout from "../components/Layout"
import BannerImage from "../components/BannerImage"
import Blurb from "../components/Blurb"
import BlurbImage from "../components/BlurbImage"

const FeaturedItems = styled.h4`
  font-size: var(--h5);
  color: var(--primaryColor);
`

const HomePage = ({ data }) => {
  const { BlogPostQuery } = data

  return (
    <>
      <Seo />
      <Layout>
        <Banner
          content="JRK Craftsmen"
          copy="Renovating homes and creating hospitable spaces all to glorify Jesus."
        />
        <BannerImage />
        <Blurb
          copy="From custom cabinentry to whole home renovation, we get things done"
        />
        <BlurbImage />
        {/* <FeaturedItems>{BlogPostQuery.totalCount} Featured Posts</FeaturedItems>
        {BlogPostQuery.edges.map(({ node }, index) => (
          <BlogItem nodeObj={node} index={index} />
        ))} */}
      </Layout>
    </>
  )
}



export default HomePage

export const query = graphql`
  {
    BlogPostQuery: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMMM DD, YY")
            path
            featuredImage {
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH
                  placeholder: TRACED_SVG
                  formats: [AUTO, WEBP]
                )
              }
            }
            featuredImageAlt
          }
          excerpt
        }
      }
    }
  }
`
