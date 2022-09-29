import React, { useEffect, useState } from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import Burger from "./Burger"
import Navigation from "./Navigation"
import { HeaderStyles } from "../styles/NavStyles"

const Header = ({Logo}) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 5)
    })
  }, [])

  return ( 
    <HeaderStyles className={scroll ? "scrolled" : null}>
      <div className="logo-cont">
        <Link to="/">
          {/* 
          TODO: add logo back in here
          <img src={Logo} alt={data.site.siteMetadata.title} /> */}
          LOGO HERE
        </Link>
      </div>
      <Burger />
      <Navigation />
    </HeaderStyles>
   );
}
 
export default Header;