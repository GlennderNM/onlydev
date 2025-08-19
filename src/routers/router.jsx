import { BrowserRouter, Route, Routes } from "react-router-dom"; // Importamos BrowserRouter
import { MainLayout } from "../layouts/MainLayout";
import { HomePage } from "../pages/HomePage"; // Asegúrate de que esta ruta sea correcta
import { LoginPage } from "../pages/LoginPage";
import { ProtectedRoute } from "../Hooks/ProtectedRoute";
import { MiPerfilPage } from "../pages/MiPerfilPage";

export function MyRouter() {
  return (
    <BrowserRouter> {/* Envolvemos las rutas con BrowserRouter para manejar el enrutamiento */}
      <Routes>
        <Route path="/login" element={
          <ProtectedRoute autenticated={false}>
              <LoginPage />
          </ProtectedRoute>
          } /> {/* Ruta para la página de login */}
        <Route path="/" element={
          <ProtectedRoute autenticated={true}>
            <MainLayout />
          </ProtectedRoute>
          }>
          <Route index element={<HomePage />} />
          <Route path="/mi-perfil" element={<MiPerfilPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
