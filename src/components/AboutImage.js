import React from "react";
import {  StaticImage } from "gatsby-plugin-image";

export default function AboutImage (props) {

    return (
        <React.Fragment>
          <div
            className="margin-top-0"
            style={{
              display: "grid",
              alignItems: "center",
              filter: "grayscale(20%)",
            }}
          >
            <StaticImage
              className="banner__image"
              imgClassName="banner__image--content"
              src="../content/images/Reverence_Newborn21-24.jpg"
              alt="About Page Image"
              layout="fullWidth"
              placeholder="blurred"
            />
          </div>
        </React.Fragment>
    )  
}