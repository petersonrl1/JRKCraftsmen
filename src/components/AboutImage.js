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
              //   TODO: replace with jon and jordan picture
              src="../content/images/happyCouple-unsplash.jpg"
              alt="Banner Image"
              layout="fullWidth"
              placeholder="blurred"
            />
          </div>
        </React.Fragment>
    )  
}