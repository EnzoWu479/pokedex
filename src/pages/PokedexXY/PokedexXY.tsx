import { useState } from "react";
import {
  BottomCape,
  Button,
  ButtonRight,
  Container,
  ContainerButton,
  ContainerPokedex,
  Main,
  Pokeball,
  PokeballCenter,
  PokeballContainer,
  PokeballLine,
  Screen,
  ScreenContainer,
  TopCape,
} from "./_pokedexxy";
import Cape from "./components/Cape/Cape";

export default () => {
  const [open, setOpen] = useState(true);
  return (
    <Container>
      <ContainerPokedex
        animate={{ height: open ? 700 : 401 }}
        // onMouseEnter={() => setOpen(true)}
        // onMouseLeave={() => setOpen(false)}
        transition={{ delay: open ? 0.3 : 0, duration: 0.3 }}
      >
        <Main>
          <ScreenContainer>
            <Screen>pokemon</Screen>
          </ScreenContainer>
          <ContainerButton>
            <Button side="left" />
            <Button side="center" />
            <Button side="right" />
          </ContainerButton>
          <Pokeball
            initial={{ translateX: "-50%", translateY: "-50%" }}
            animate={{
              opacity: open ? 0 : 1,
              rotate: open ? 0 : 180,
            }}
            transition={{ delay: open ? 0 : 0.3, duration: 0.3 }}
          >
            <PokeballContainer>
              <PokeballLine />
              <PokeballCenter />
            </PokeballContainer>
          </Pokeball>
        </Main>
        <TopCape>
          <Cape />
        </TopCape>
        <BottomCape>
          <Cape />
        </BottomCape>
      </ContainerPokedex>
    </Container>
  );
};
