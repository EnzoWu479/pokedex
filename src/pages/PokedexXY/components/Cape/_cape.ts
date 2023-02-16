import styled from "styled-components";

export const CircleLines = styled.div`
  height: 170px;
  width: 170px;
  border: 6px solid #880e01;
  border-radius: 50%;
  position: absolute;
`;
export const Cape = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(to left, #0005 10px, transparent 20px);
`;
export const CirclePokeball = styled.div`
  height: 250px;
  width: 250px;
  background: radial-gradient(circle at 50% 50%, transparent 80px, #000 0);
  border: 6px solid #fff;
  border-radius: 50%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: -80%;
  left: 50%;
  transform: translateX(-50%);
`;
export const CircleBlue = styled.div`
  height: 60%;
  width: 60%;
  background-color: transparent;
  border-radius: 50%;
`;
export const CircleLineWhite = styled.div`
  background: linear-gradient(to left, #fff 22%, transparent 22% 78%, #fff 78%);
  width: 100%;
  height: 4px;
  position: absolute;
  bottom: 0;
`;
