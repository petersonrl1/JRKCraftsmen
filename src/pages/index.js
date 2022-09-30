import React from "react"
import Seo from "../components/SEO"
import Banner from "../components/Banner"
import Layout from "../components/Layout"
import BannerImage from "../components/BannerImage"
import Blurb from "../components/Blurb"
import BlurbImage from "../components/BlurbImage"


const HomePage = ({ data }) => {

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
      </Layout>
    </>
  )
}

export default HomePage

// export const query = graphql`
//   {
//     BlogPostQuery: allMarkdownRemark(
//       sort: { fields: [frontmatter___date], order: DESC }
//       limit: 3
//     ) {
//       totalCount
//       edges {
//         node {
//           frontmatter {
//             title
//             date(formatString: "MMMM DD, YY")
//             path
//             featuredImage {
//               childImageSharp {
//                 gatsbyImageData(
//                   layout: FULL_WIDTH
//                   placeholder: TRACED_SVG
//                   formats: [AUTO, WEBP]
//                 )
//               }
//             }
//             featuredImageAlt
//           }
//           excerpt
//         }
//       }
//     }
//   }
// `
