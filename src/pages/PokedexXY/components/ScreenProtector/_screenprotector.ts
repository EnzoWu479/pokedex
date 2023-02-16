import { motion } from "framer-motion";
import styled from "styled-components";

export const MainScreenProtector = styled(motion.div)`
  position: absolute;
  inset: 0;
  /* background: #f0fafd; */
  background: linear-gradient(
    to right,
    #7bd3e8,
    #f0fafd 30%,
    #f0fafd 70%,
    #7bd3e8
  );
  box-shadow: 0 10px 10px 10px inset #7bd3e8;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Pokeball = styled(motion.div)`
  background-color: #7bd3e8aa;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const PokeballContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
interface PokeballLineProps {
  size: number;
  weight: number;
}
export const PokeballLines = styled.div<PokeballLineProps>`
  position: absolute;
  width: ${({ size }) => size}%;
  height: ${({ size }) => size}%;
  border: ${({ weight }) => weight}px solid #7bd3e8;
  border-radius: 50%;
`;
export const PokeballCenter = styled.div`
  background-color: #fffe;
  /* border: 2px solid #000; */
  width: 40%;
  height: 40%;
  border-radius: 50%;
`;
export const PokeballLine = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: 10px;
  z-index: -1;
  background-color: #fffa;
  bottom: 0;
`;
