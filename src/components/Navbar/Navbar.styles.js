import styled, { keyframes } from "styled-components";

const topSticky = keyframes`
 from {
    transform: translateY(-5rem);
  }
  to {
    transform: translateY(0rem);
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;

  background: #fff;

  height: 80px;

  padding: 0 2%;

  &.sticky {
    position: sticky;
    top: 0;

    animation: ${topSticky} 0.5s ease-in-out;

    z-index: 1;
  }
`;
