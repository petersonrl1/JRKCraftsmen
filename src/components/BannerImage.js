import React from "react";
import {  StaticImage } from "gatsby-plugin-image";

export default function Little (props) {

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
              src={"../content/images/Copy of JRKCraftsmen_CarnuccioHouse-30.jpeg"}
              alt="Banner Image"
              layout="fullWidth"
              placeholder="blurred"
            />
          </div>
        </React.Fragment>
    )  
}

