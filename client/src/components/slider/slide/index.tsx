import Image from "next/image";
import React from "react";
import { Container, Name, Picture, Quote, Role, User } from "./Slide.styles";
import { Props } from "./Slide.types";

function Slide({ isActive, ...slide }: Props) {
  if (isActive) {
    return null;
  }

  const { src, quote, name, role } = slide;

  return (
    <Container>
      <Picture>
        <Image src={src} alt="" width={254} height={253} />
      </Picture>
      <div>
        <Quote>" {quote} "</Quote>
        <User>
          <Name>{name}</Name>
          <Role>{role}</Role>
        </User>
      </div>
    </Container>
  );
}

export default Slide;
