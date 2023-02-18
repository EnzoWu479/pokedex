import regions from "../../../../utils/regions";
import {
  ContainerCarousel,
  GameImg,
  GameItemContainer,
  GameName,
  SquareText,
} from "./_versions";

interface Props {
  selectedRegion: number;
}
export default ({ selectedRegion }: Props) => {
  function scrollX() {
    if (selectedRegion === 0) return 0;
    const x = (selectedRegion - 1) * 105;
    if (x > 500) return 500;
    return x;
  }
  return (
    <ContainerCarousel>
      <GameItemContainer
        selected={selectedRegion === 0}
        animate={{
          translateX: -scrollX(),
        }}
      >
        <SquareText>Back</SquareText>
        <GameName />
      </GameItemContainer>
      {regions.map((item) => {
        return (
          <GameItemContainer
            key={item.id}
            selected={selectedRegion === Number(item.id)}
            animate={{
              translateX: -scrollX(),
            }}
          >
            <GameImg src={item.img} />
            <GameName>{item.name}</GameName>
          </GameItemContainer>
        );
      })}
    </ContainerCarousel>
  );
};
