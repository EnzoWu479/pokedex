import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  position: fixed;
  inset: 0;
  display: grid;
  background-color: ${() => theme.colors.background};
`;
export const DivChildren = styled.div`
  position: relative;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 6px;
    height: 2px;
  }

  ::-webkit-scrollbar-track {
    background: ${() => theme.colors.gray};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${() => theme.colors.primary};
    border-radius: 10px;
  }
`;
