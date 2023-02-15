import styled, { css } from "styled-components";

export const Abbreviation = styled.abbr`
  text-decoration: none;
`;
interface Props {
  maxLine?: number;
  maxLenght?: number;
}
export const Container = styled.div<Props>`
  margin: 0;
  ${({ maxLenght }) =>
    maxLenght &&
    css`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: ${maxLenght}px;
    `}
  ${({ maxLine }) =>
    maxLine &&
    css`
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      -webkit-line-clamp: ${maxLine};
    `}
`;
