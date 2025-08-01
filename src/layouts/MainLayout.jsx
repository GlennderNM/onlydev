import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar/Sidebar";

export const MainLayout = () => {
  return (
    <main className="flex justify-center h-screen overflow-hidden bg-white dark:bg-[var(--color-bg-dark)] text-black dark:text-white transition-colors duration-300">
      <section className="flex w-full max-w-[1300px] h-full">
        <Sidebar />
        {/* Contenido principal */}
        <section className="flex-1 px-4 overflow-y-auto h-full">
          <Outlet />
        </section>
      </section>
    </main>
  );
};
