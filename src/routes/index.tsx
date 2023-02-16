import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PokedexXY from "../pages/PokedexXY/PokedexXY";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:pokemonId" element={<PokedexXY />} />
        <Route path="/games" element={<PokedexXY />} />
        <Route path="/" element={<Navigate to="/1" />} />
        <Route path="/*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
