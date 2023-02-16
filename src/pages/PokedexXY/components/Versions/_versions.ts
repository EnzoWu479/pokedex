import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const ContainerCarousel = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: start-flex;
  overflow: hidden;
  gap: 5px;
  padding: 0 5px;
`;
interface Props {
  selected: boolean;
}
export const GameItemContainer = styled(motion.div)<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  gap: 5px;

  opacity: 0.8;
  ${({ selected }) =>
    selected &&
    css`
      opacity: 1;
      img {
        border: 3px solid #fff;
      }
    `}
`;
export const GameImg = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 5px;
  transition: all ease 0.2s;
  border: 3px solid transparent;
`;
export const SquareText = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 5px;
  transition: all ease 0.2s;
  border: 3px solid transparent;
  background-color: #f6f6f6;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
`;
export const GameName = styled.h3`
  height: 14px;
  font-size: 14px;
  font-weight: 500;
`;
