import { BrowserRouter, Route, Routes } from "react-router-dom"; // Importamos BrowserRouter
import { HomePage } from "../pages/HomePage";
import { MainLayout } from "../layouts/MainLayout";

export function MyRouter() {
  return (
    <BrowserRouter> {/* Envolvemos las rutas con BrowserRouter para manejar el enrutamiento */}
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
