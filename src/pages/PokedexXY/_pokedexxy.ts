import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
export const ContainerPokedex = styled(motion.div)`
  width: 450px;
  height: 405px;
  /* background-color: #52b6e7; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 450px) {
    width: 95%;
  }
`;
export const TopCape = styled(motion.div)`
  background: radial-gradient(circle at 50% 103%, transparent 80px, #e11e1b 0);
  width: 100%;
  height: 200px;
  border-radius: 20px 20px 0 0;
  position: absolute;
  overflow: hidden;
  top: 0px;
  filter: drop-shadow(0px 10px 8px #0008);
  pointer-events: none;
`;

export const BottomCape = styled(TopCape)`
  transform: scaleY(-1);
  top: unset;
  bottom: 0px;
`;

export const Main = styled(motion.main)`
  width: 90%;
  height: 90%;
  background-color: #52b6e7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-top: 40px;
  box-shadow: 0 0 10px 10px inset #0008;
  gap: 20px;
`;
export const ScreenContainer = styled.div`
  background-color: #000e;
  width: 80%;
  height: 220px;
  min-height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;
export const ScreenContent = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #55bffd;
  width: 85%;
  height: 80%;
  border-radius: 2px;
`;
export const ContainerButton = styled.div`
  border-radius: 10px 10px 0 0;
  border-bottom-left-radius: 40% 70%;
  border-bottom-right-radius: 40% 70%;
  display: flex;
  gap: 5px;
  border: 2px solid #0006;
  padding: 5px;
`;
interface ButtonProps {
  side: "left" | "right" | "center";
}
export const Button = styled(motion.button)<ButtonProps>`
  height: 40px;
  width: 40px;
  border-radius: 5px 5px 0 0;
  border: none;
  background-color: #52b6e7;
  border: 2px solid #0006;
  box-shadow: 5px 0px 5px #0004;
  transition: all linear 0.1s;
  ${({ side }) => {
    switch (side) {
      case "left":
        return css`
          border-bottom-left-radius: 100%;
          border-bottom-right-radius: 5px;
        `;
      case "right":
        return css`
          border-bottom-right-radius: 100%;
          border-bottom-left-radius: 5px;
        `;
      default:
        return css`
          border-bottom-right-radius: 15px 5px;
          border-bottom-left-radius: 15px 5px;
          height: 44px;
        `;
    }
  }}
  &:active {
    box-shadow: 2px 0px 2px #0004;
  }
`;
