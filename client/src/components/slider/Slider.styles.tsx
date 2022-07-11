import styled from "styled-components";

export const Container = styled.div`
  text-align: center;


`;

export const ButtonGroup = styled.div`
  box-shadow: 0 0.4688rem 0.625rem -0.3125rem ${(props) => props.theme.colors.shadow};
`;

export const Button = styled.button`
  border: none;
  outline: none;
  &:first-child {
    border-radius: 0.875rem 0 0 0.875rem;
  }
  &:last-child {
    border-radius: 0 0.875rem 0.875rem 0;
  }
`;

export const Icon = styled.img``;
