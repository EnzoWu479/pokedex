import styled from "styled-components";
import { bg_day, bg_night } from "../../../../assets";
import isDay from "../../../../utils/isDay";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 5px;
  box-sizing: border-box;
`;
export const Image = styled.img`
  width: 100%;
  height: 120px;
  padding: 10px;
  box-sizing: border-box;
  object-fit: contain;
  background-image: url(${isDay ? bg_day : bg_night});
  background-size: cover;
  border-radius: 10px;
`;
export const TopContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  @media (max-width: 450px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export const InfosContainer = styled.div`
  padding-left: 20px;
  color: #03235a;
`;
export const Code = styled.h2`
  font-size: 13px;
  margin-left: 5px;
  font-weight: 700;
  @media (max-width: 450px) {
    font-size: 11px;
  }
`;
export const Name = styled.h3`
  margin-left: 10px;
  font-size: 15px;
  &:first-letter {
    text-transform: uppercase;
  }
  @media (max-width: 450px) {
    font-size: 13px;
  }
`;
export const Division = styled.div`
  background-color: #cbffff;
  width: 100%;
  height: 3px;
  margin: 2px 0;
`;
export const InfoLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 13px;
  margin-top: 2px;
  font-weight: 700;
  margin-left: 2px;
  margin: 2px 0;
  @media (max-width: 450px) {
    font-size: 11px;
  }
`;
export const TypeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  @media (max-width: 450px) {
    gap: 2px;
  }
`;
export const Type = styled.div`
  text-transform: uppercase;
  font-size: 10px;
  color: #fff;
  padding: 2px 5px;
  border-radius: 50px;
  box-shadow: 0 0 5px 0 inset #fff;
  border: 1px solid #000;
  @media (max-width: 450px) {
    font-size: 8px;
    padding: 1px 3px;
  }
`;
export const Description = styled.div`
  font-size: 11px;
  margin-top: 5px;
`;
