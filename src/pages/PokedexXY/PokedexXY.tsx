import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  BottomCape,
  Button,
  Container,
  ContainerButton,
  ContainerPokedex,
  Main,
  ScreenContainer,
  ScreenContent,
  TopCape,
} from "./_pokedexxy";
import Cape from "./components/Cape/Cape";
import ScreenProtector from "./components/ScreenProtector/ScreenProtector";
import { IPokemon, IPokemonDetails } from "../../types/interfaces";
import api from "../../services/api";
import Screen from "./components/Screen/Screen";
import Versions from "./components/Versions/Versions";
import regions from "../../utils/regions";
import Footer from "./components/Footer/Footer";

export default () => {
  const { pokemonId } = useParams();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState(0);
  const [pokemon, setPokemon] = useState<IPokemon>({} as IPokemon);
  const [pokemonDetail, setPokemonDetail] = useState<IPokemonDetails>(
    {} as IPokemonDetails
  );

  async function getPokemon() {
    await api.get(`/pokemon/${pokemonId}`).then(({ data }) => {
      setPokemon(data);
    });
    await api.get(`/pokemon-species/${pokemonId}`).then(({ data }) => {
      setPokemonDetail(data);
    });
  }

  function handleNext() {
    if (pokemonId === "649") return;
    if (pokemonId) {
      return navigate(`/${Number(pokemonId) + 1}`);
    }
    if (selectedRegion < 5) setSelectedRegion((prev) => prev + 1);
  }

  function handlePrevious() {
    if (pokemonId) {
      if (pokemonId !== "1") return navigate(`/${Number(pokemonId) - 1}`);
    } else {
      if (selectedRegion === 0) return;
      setSelectedRegion((prev) => prev - 1);
    }
  }

  function handleClickCenter() {
    if (pokemonId) {
      setSelectedRegion(0);
      return navigate("/games");
    }
    if (selectedRegion === 0) return navigate(-1);
    return navigate(`/${regions[selectedRegion - 1].firstPokemon}`);
  }

  useEffect(() => {
    if (pokemonId) getPokemon();
  }, [pokemonId]);
  return (
    <>
      <Container>
        <ContainerPokedex
          initial={{ height: 450 }}
          animate={{ height: open ? 700 : 450 }}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          transition={{ delay: open ? 0.3 : 0.3, duration: 0.3 }}
        >
          <Main>
            <ScreenContainer>
              <ScreenContent
                animate={{ opacity: open ? 1 : 0 }}
                transition={{ delay: open ? 0.5 : 0 }}
              >
                {pokemonId ? (
                  <Screen pokemon={pokemon} detail={pokemonDetail} />
                ) : (
                  <Versions selectedRegion={selectedRegion} />
                )}
              </ScreenContent>
            </ScreenContainer>
            <ContainerButton>
              <Button side="left" type="button" onClick={handlePrevious} />
              <Button side="center" type="button" onClick={handleClickCenter} />
              <Button side="right" type="button" onClick={handleNext} />
            </ContainerButton>
            <ScreenProtector open={open} />
          </Main>
          <TopCape>
            <Cape />
          </TopCape>
          <BottomCape>
            <Cape />
          </BottomCape>
        </ContainerPokedex>
      </Container>
      <Footer />
    </>
  );
};
