import React, { useState } from "react";
import Slide from "../slide";
import { Button, ButtonGroup, Container, Icon } from "./Slider.styles";

const data = [
  {
    id: "slide-1",
    quote:
      "I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.",
    name: "Tanya Sinclair",
    role: "UX Engineer",
    src: "/images/image-tanya.jpg",
  },
  {
    id: "slide-2",
    quote:
      "If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
    name: "John Tarkpor",
    role: "Junior Front-end Developer",
    src: "/images/image-john.jpg",
  },
];

function Slider() {
  const [slides, setSlides] = useState(data);
  const [active, setActive] = useState(0);

  const handleNext = () =>
    active === slides.length - 1 ? setActive(0) : setActive(active + 1);
  const handlePrevious = () =>
    active === 0 ? setActive(slides.length - 1) : setActive(active - 1);

  return (
    <Container>
      {slides.map((slide, index) => {
        return <Slide key={slide.id} {...slide} isActive={active !== index} />;
      })}
      <ButtonGroup>
        <Button onClick={handlePrevious}>
          <Icon src="/images/icon-prev.svg" alt="" width={8} height={16} />
        </Button>
        <Button onClick={handleNext}>
          <Icon src="/images/icon-next.svg" alt="" width={8} height={16} />
        </Button>
      </ButtonGroup>
    </Container>
  );
}

export default Slider;
