import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    flex-direction: row-reverse;
  }
`;

export const Picture = styled.picture`
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    img {
      width: 540px;
      height: 540px;
    }
  }
`;

export const Quote = styled.p`
  font-weight: ${(props) => props.theme.fonts.fontWeight.light};
  font-size: 0.5rem;
  line-height: 0.75rem;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: 1.375rem;
    line-height: 1.375rem;
  }
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    flex-direction: row;
  }
`;

export const Name = styled.p`
  font-weight: ${(props) => props.theme.fonts.fontWeight.bold};
  font-size: 0.4688rem;
  line-height: 0.625rem;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: 0.625rem;
    line-height: 1.1875rem;
  }
`;

export const Role = styled.p`
  font-weight: ${(props) => props.theme.fonts.fontWeight.medium};
  font-size: 0.4688rem;
  line-height: 0.625rem;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: 0.625rem;
    line-height: 1.1875rem;
  }
`;
