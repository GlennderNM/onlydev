import { BrowserRouter, Route, Routes } from "react-router-dom"; // Importamos BrowserRouter
import { MainLayout } from "../layouts/MainLayout";
import { HomePage } from "../pages/HomePage"; // Asegúrate de que esta ruta sea correcta
import { LoginPage } from "../pages/LoginPage";

export function MyRouter() {
  return (
    <BrowserRouter> {/* Envolvemos las rutas con BrowserRouter para manejar el enrutamiento */}
      <Routes>
        <Route path="/login" element={<LoginPage />} /> {/* Ruta para la página de login */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
