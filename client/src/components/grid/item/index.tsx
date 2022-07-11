import React from "react";
import { Body, Container, Icon, Title } from "./Item.styles";
import { Props } from "./Item.types";

function Item({ title, body, color, icon }: Props) {
  return (
    <Container color={color}>
      <Title>{title}</Title>
      <Body>{body}</Body>
      <Icon src={icon} alt="" width={64} height={64} />
    </Container>
  );
}

export default Item;
