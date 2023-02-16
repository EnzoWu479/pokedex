import { IPokemon, IPokemonDetails } from "../../../../types/interfaces";
import typeColors from "../../../../utils/typeColors";
import {
  Code,
  Container,
  Description,
  Division,
  Image,
  InfoLine,
  InfosContainer,
  Name,
  TopContainer,
  Type,
  TypeContainer,
} from "./_screen";

interface Props {
  pokemon: IPokemon;
  detail: IPokemonDetails;
}

export default ({ pokemon, detail }: Props) => {
  const description = detail?.flavor_text_entries?.find(
    (item) => item.version.name === "black-2"
  );
  const nickname = detail?.genera?.find((item) => item.language.name === "en");
  return (
    <Container>
      <TopContainer>
        <Image
          src={
            pokemon.sprites?.versions?.["generation-v"]["black-white"].animated
              ?.front_default
          }
        />
        <InfosContainer>
          <Code>No. {pokemon.id}</Code>
          <Name>{pokemon.name}</Name>
          <Division />
          <InfoLine>{nickname?.genus}</InfoLine>
          <Division />
          <InfoLine>
            TYPE
            <TypeContainer>
              {pokemon.types?.map((item) => (
                <Type
                  key={item.type.name}
                  style={{ backgroundColor: typeColors(item?.type.name) }}
                >
                  {item.type.name}
                </Type>
              ))}
            </TypeContainer>
          </InfoLine>
          <Division />
          <InfoLine>
            HEIGHT <p>{Number(pokemon.height / 10).toFixed(1)}m</p>
          </InfoLine>
          <Division />
          <InfoLine>
            WEIGHT <p>{pokemon.weight / 10}kg</p>
          </InfoLine>
        </InfosContainer>
      </TopContainer>
      <Division />
      <Description>{description?.flavor_text}</Description>
    </Container>
  );
};
