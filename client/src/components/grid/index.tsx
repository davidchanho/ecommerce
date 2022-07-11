import styled from "styled-components";

export const Grid = styled.div`
  padding: 1.0667rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-row: 1fr 1fr 1fr;
    align-items: center;
  }
`;
