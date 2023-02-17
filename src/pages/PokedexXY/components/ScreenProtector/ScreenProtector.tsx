import { AnimatePresence } from "framer-motion";
import {
  MainScreenProtector,
  Pokeball,
  PokeballCenter,
  PokeballContainer,
  PokeballLine,
  PokeballLines,
} from "./_screenprotector";

interface Props {
  open: boolean;
}
export default ({ open }: Props) => {
  return (
    <AnimatePresence>
      <MainScreenProtector
        initial={{ opacity: 1, pointerEvents: "all" }}
        animate={{
          opacity: open ? 0 : 1,
          pointerEvents: open ? "none" : "all",
        }}
        transition={{ delay: open ? 0.3 : 0.6, duration: 0.3 }}
      >
        <Pokeball
          animate={{
            opacity: open ? 0 : 1,
            rotate: open ? 0 : 180,
          }}
          transition={{ delay: open ? 0 : 0.7, duration: 0.3 }}
        >
          <PokeballContainer>
            <PokeballLine />
            <PokeballCenter />
            {/* <PokeballLines size={25} weight={1} /> */}
            <PokeballLines size={45} weight={2} />
            <PokeballLines size={60} weight={3} />
            <PokeballLines size={70} weight={1} />
            <PokeballLines size={80} weight={2} />
            <PokeballLines size={90} weight={4} />
          </PokeballContainer>
        </Pokeball>
      </MainScreenProtector>
    </AnimatePresence>
  );
};
