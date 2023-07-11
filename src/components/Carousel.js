import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import { IconButton, Box, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }

  handleNext = () => {
    this.setState((prevState) => ({
      activeIndex: (prevState.activeIndex + 1) % images.length,
    }));
  };

  handlePrevious = () => {
    this.setState((prevState) => ({
      activeIndex: (prevState.activeIndex - 1 + images.length) % images.length,
    }));
  };

  render() {
    const { activeIndex } = this.state;
    const activeImage = images[activeIndex];

    return (
      <div className="carousel">
        <div className="image-container">
          <img
            src={activeImage.img}
            alt={activeImage.title}
            className="carousel-image"
          />
          <div className="carousel-background">
            <div className="caption-container">
              <Box
                bgcolor="rgba(255, 255, 255, 0.7)"
                borderRadius="10px"
                p={2}
                className="caption-box"
              >
                <Typography variant="h4" component="h2" gutterBottom>
                  {activeImage.title}
                </Typography>
              </Box>
              <Box
                bgcolor="rgba(255, 255, 255, 0.7)"
                borderRadius="10px"
                p={2}
                className="caption-box"
              >
                <Typography variant="subtitle1" component="p">
                  {activeImage.subtitle}
                </Typography>
              </Box>
            </div>
            <div className="carousel-controls">
              <IconButton
                onClick={this.handlePrevious}
                className="carousel-control"
              >
                <ArrowBackIosIcon />
              </IconButton>
              <IconButton
                onClick={this.handleNext}
                className="carousel-control"
              >
                <ArrowForwardIosIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
