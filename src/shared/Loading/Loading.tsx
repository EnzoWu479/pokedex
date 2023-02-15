import ReactLoading from "react-loading";
import theme from "../../styles/theme";
import { Container } from "./_loading";

export default () => {
  return (
    <Container>
      <ReactLoading type="spin" color={theme.colors.primary} />
    </Container>
  );
};
