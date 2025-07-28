import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useThemeStore = create( // gestor de estado para el tema
  persist((set) => ({ // inicializa el estado del tema
    theme: "light", // tema por defecto
    setTheme: () =>
      set((state) => {
        const newTheme = state.theme === "light" ? "dark" : "light"; // alterna entre "light" y "dark"
        document.documentElement.classList.remove(state.theme); // elimina la clase del tema actual
        document.documentElement.classList.add(newTheme); // añade la clase del nuevo tema
        return { theme: newTheme }; 
      }),
  }),
  {
    name: "theme-storage-onmydev", // nombre del almacenamiento persistente
  }
)
);
