import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import {SliderWrapper, Image, Nav, BackButton, NextButton} from "./Carrousel.styles"


export const Carrousel = (props) => {
    var image1 = require('../../assets/header-x1.png');
    var image2 = require('../../assets/header-x2.png');
    const slides = [
        image1.default,
        image2.default,
        ];

    return (
        <SliderWrapper>
            <CarouselProvider
            naturalSlideWidth={1000}
            naturalSlideHeight={500}
            totalSlides={slides.length}
            visibleSlides={1}
            >
            <Slider>         
                {slides.map((slide, index) => (
                <Slide index={index}>                 
                    <Image  image={slide}/>
                </Slide>
                ))}
            </Slider>
            <Nav>
                <BackButton>{`<`}</BackButton>
                <NextButton>{`>`}</NextButton>
            </Nav>
            </CarouselProvider>
        </SliderWrapper>
    );
  };
  

