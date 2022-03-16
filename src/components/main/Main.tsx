import * as React from "react";
import styled from "styled-components";
import Card from "@mui/material/Card";
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";
import Carousel from "react-material-ui-carousel";

import Container from "@mui/material/Container";
import "../../assets/App.css";
import Top from "../Top";
import { SliderData } from "./SliderData";
import { useState } from "react";
import Slide from "./Slide";

const CardContainer = styled.div`
  width: 1100px;
  height 400px;
  margin-top:50px;
  display: flex;
  border-radius: 26px;
  position: relative;
  border: 2px solid #fff;
  background-color: rgba(255,255,255,0.2);
  backdrop-filter: blur(10px);
  `;

const SliderImg = styled.img`
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
`;

const CarouselSection = styled.div`
  width: 100%;
  height: 400px;
`;

function Main() {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <>
      <Container className="main-container">
        <CardContainer>
          <CarouselSection>
            <Slide />
          </CarouselSection>
        </CardContainer>
      </Container>
    </>
  );
}

export default Main;