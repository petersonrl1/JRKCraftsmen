import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const ImageCarousel = ({ images }) => {
  return (
    <Carousel>
      {images.map(({ node }) => (
        <Carousel.Item key={node.id}>
          <GatsbyImage
            image={getImage(node)}
            alt={`Image ${node.id}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
