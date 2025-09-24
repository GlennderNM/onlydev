import { create } from "zustand";
import { supabase } from "../supabase/supabase.config";

const tabla = "comentarios";

export const useComentariosStore = create((set) => ({
  showModal: false,
  setShowModal: () => set((state) => ({ showModal: !state.showModal })),
  itemSelect: null,
  setItemSelect: (p) => {
    set({ itemSelect: p });
  },
  insertarComentrio: async (p) => {
    const { error } = await supabase.from(tabla).insert(p);
    if (error) {
      throw new Error(error.message);
    }
  },
  mostrarComentarios: async (P) => {
    const { data, error } = await supabase.rpc("", P);
    if (error) {
      throw new Error(error.message);
    }
    return data;
  },
}));
