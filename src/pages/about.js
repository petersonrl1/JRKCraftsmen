import React from "react"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import AboutImage from "../components/AboutImage"

const AboutPage = () => (
  <>
    <Layout>
      <Banner
        content="Who is JRK Craftsmen?"
      />
      <p>
        We are a husband and wife team helping to create beautiful spaces for our clients all over Chester County.
      </p>
      <AboutImage
      />
    </Layout>
  </>
)

export default AboutPage
