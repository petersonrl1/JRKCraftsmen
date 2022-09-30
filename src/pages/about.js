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
        We are a husband and wife team helpging to create beautiful spaces for our clients throughout Chester County.
      </p>
      <h3>Where It Began</h3>
      <p>
        {/* TODO: add  "Where it Began" copy here  */}
        <strong>add copy here about Jon's background, something personal about you guys working together, etc. We can replace the below image with a pic of the family, just you guys, whatever you want  ;)</strong>
      </p>
      <AboutImage
      />
    </Layout>
  </>
)

export default AboutPage
