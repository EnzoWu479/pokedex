import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
export const ContainerPokedex = styled(motion.div)`
  width: 400px;
  height: 405px;
  /* background-color: #52b6e7; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
export const TopCape = styled(motion.div)`
  background: radial-gradient(circle at 50% 103%, transparent 60px, red 0);
  width: 100%;
  height: 200px;
  border-radius: 20px 20px 0 0;
  position: absolute;
  overflow: hidden;
  top: 0px;
  filter: drop-shadow(0px 10px 8px #0008);
`;

export const BottomCape = styled(TopCape)`
  transform: scaleY(-1);
  top: unset;
  bottom: 0px;
`;

export const Main = styled.main`
  width: 95%;
  height: calc(100% - 250px);
  background-color: #52b6e7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: 0 0 10px 10px inset #0008;
  gap: 20px;
`;
export const Pokeball = styled(motion.div)`
  background-color: red;
  width: 100px;
  height: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
export const PokeballCenter = styled.div`
  background-color: #fff;
  /* border: 2px solid #000; */
  width: 20%;
  height: 20%;
  border-radius: 50%;
`;
export const PokeballLine = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: 2px;
  z-index: -1;
  background-color: #fff;
  bottom: 0;
`;
export const ScreenContainer = styled.div`
  background-color: #000;
  width: 80%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Screen = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #55bffd;
  width: 80%;
  height: 80%;
`;
export const ContainerButton = styled.div`
  border-radius: 0 0 100% 100%;
  overflow: hidden;
  height: 50px;
  width: 100px;
  display: flex;
  gap: 5px;
`;
interface ButtonProps {
  side: "left" | "right" | "center";
}
export const Button = styled(motion.button)<ButtonProps>`
  height: 50px;
  width: 30px;
  border-radius: 10px 10px 0 0;
  border: none;
`;
