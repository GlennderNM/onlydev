import { create } from "zustand";
import { supabase } from "../supabase/supabase.config";

export const useAuthStore = create((set) => ({
  // Store para manejar la autenticación
  credenciales: null, // Estado para almacenar las credenciales del usuario
  setCredenciales: (p) => set({ credenciales: p }), // Función para actualizar las credenciales
  crearUserYLogin: async (p) => {
    // Función para crear un usuario y iniciar sesión
    const { data } = await supabase.auth.signUp({
      // Llama a la API de Supabase para crear un usuario
      email: p.email,
      password: p.password,
    });
    return data.user;
  },
  cerrarSesion: async () => {
    await supabase.auth.signOut();
  },
}));

export const useSubcription = create((set) => {
  // Store para manejar la suscripción
  const store = {
    user: null, // Estado para almacenar el usuario autenticado
  };
  supabase.auth.getSession().then(({ data: { session } }) => {
    // Obtiene la sesión actual del usuario
    if (session?.user) {
      set({ user: session.user }); // Si hay una sesión, actualiza el usuario en el store
    }
  });
  supabase.auth.onAuthStateChange((_event, session) => {
    if (session?.user) {
      set({ user: session.user });
    } else {
      set({ user: null });
    }
  });
  return store;
});
