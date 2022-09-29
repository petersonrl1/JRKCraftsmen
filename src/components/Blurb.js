import React from "react";
import PropTypes from "prop-types"

const Blurb = ({ copy }) => {
    return (
      <div>
        <h5>{copy}</h5>
      </div>
    )
  }
  
  Blurb.propsTypes = {
    copy: PropTypes.string,
  }
  
  export default Blurb