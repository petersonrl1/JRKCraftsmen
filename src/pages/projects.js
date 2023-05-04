import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import ImageCarousel from "../components/ImageCarousel"
import Banner from "../components/Banner"
import DividerLine from "../components/DividerLine"

const ProjectsPage = ({ data }) => {
  const project1Images = data.project1Images.edges
  const project2Images = data.project2Images.edges
  const project3Images = data.project3Images.edges

  return (
    <Layout>
        <Banner
            content={"JRK Craftsmen"}
            copy={"We are proud of the work we've done; check out a few of the projects that showcase our fine craftsmenship."}
        />
        <hr/>
      <div>
        <h3>Kitchen Remodel</h3>
        <h6><i>West Chester, PA</i></h6>
        <ImageCarousel images={project1Images} />
        <DividerLine />
        <h3>Fireplace and Built-In Bookshleves</h3>
        <h6><i>West Chester, PA</i></h6>
        <ImageCarousel images={project2Images} />
        <DividerLine />
        <h3>Door Awning</h3>
        <h6><i>Downingtown, PA</i></h6>
        <ImageCarousel images={project3Images} />
      </div>
    </Layout>
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
    project2Images: allFile(
      filter: {
        relativeDirectory: { eq: "images/project2" }
      }
    ) {
      edges {
        node {
          id
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 3000)
          }
        }
      }
    }
    project3Images: allFile(
      filter: {
        relativeDirectory: { eq: "images/project3" }
      }
    ) {
      edges {
        node {
          id
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 3000)
          }
        }
      }
    }
  }
`

export default ProjectsPage
