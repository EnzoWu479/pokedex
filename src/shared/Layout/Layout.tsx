import { ReactNode } from "react";
import Loading from "react-loading";
import { Container, DivChildren } from "./_layout";

interface Props {
  children: ReactNode;
  loaded?: boolean;
}
export default ({ children, loaded = true }: Props) => {
  return (
    <Container>
      <DivChildren>{loaded ? children : <Loading />}</DivChildren>
    </Container>
  );
};
