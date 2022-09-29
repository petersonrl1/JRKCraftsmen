import React from "react"
import PropTypes from "prop-types"

const Banner = ({ content, copy }) => {
  return (
    <div>
      <h1>{content}</h1>
      <h5>{copy}</h5>
    </div>
  )
}

Banner.propsTypes = {
  content: PropTypes.string,
}

export default Banner
