import React from "react"
import Seo from "../components/SEO"
import styled from "styled-components"
import Banner from "../components/Banner"
import Layout from "../components/Layout"
import Iframe from "../components/Iframe"



const Form = styled.div`
  margin: calc(var(--spacing) * 2) 0;

  @media (min-width: 1200px) {
    margin: calc(var(--spacing) * 4) 0;
  }
`

const FormLabel = styled.label`
  font-family: var(--serif);
  font-size: var(--h5);
  margin-bottom: var(--spacing);
  display: inline-block;
`

const FormInput = styled.input`
  height: 50px;
  width: 100%;
  margin-bottom: calc(var(--spacing) * 1.5);
  font-size: var(--para);
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.25);
`

const FormTextArea = styled.textarea`
  width: 100%;
  min-height: 150px;
  margin-bottom: calc(var(--spacing) * 1.5);
  font-size: var(--para);
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.25);
`

const ContactPage = () => {
  return (
    <>
    {/* <Script id="hello-world">{`console.log('Hello world!')`}</Script> */}
      <Seo
        title="Get in touch"
        description="Contact JRK Craftsmen about your next project"
      />
      <Layout>
        <Banner
          content="JRK Craftsmen"
          copy="Get in touch!"
        />
        
          <Iframe 
            src="https://buildertrend.net/leads/contactforms/ContactFormFrame.aspx?builderID=82966"
            title="BuilderTrend contact form"
            width="750"
          />
        
        
        {/* <Form>
          <form name="contact" netlify>
            <p>
              <FormLabel for="name">Your Name</FormLabel>
              <FormInput type="text" name="name" />
            </p>
            <p>
              <FormLabel for="email">Email Address</FormLabel>
              <FormInput type="email" name="email" />
            </p>
            <p>
              <FormLabel for="message">Your Message</FormLabel>
              <FormTextArea type="text" name="message" />
            </p>
            <p>
              <Button className="btn-link" text="Send Message" type="submit" />
            </p>
          </form>
        </Form> */}
      </Layout>
    </>
  )
}

export default ContactPage

export function Head() {
  return (
    <script type="text/javascript" src="https://buildertrend.net/leads/contactforms/js/btClientContactForm.js"></script> 
  )
}
