import { Icon } from "@iconify/react/dist/iconify.js";
import { BtnClose } from "../ui/buttons/BtnClose";
import { useInsertarComentarioMutate } from "../../stack/ComentariosStack";
import { useState } from "react";

export const ComentariosModal = ({ item, onClose }) => {
  const [comentario, setComentario] = useState("");
  const { mutate: comentarioMutate } = useInsertarComentarioMutate({
    comentario: comentario,
    serComentario: setComentario,
  });

  return (
    <div className="fixed inset-0 z-100 bfg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <section className="dark:bg-neutral-900 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-hidden shadow-xl flex flex-col relative">
        <header className="h-25 sticky p-4 border-b border-gray-400/50">
          <div className="flex items-center gap-3 text-black dark:text-white">
            <img
              className="w-12 h-12 rounded-full object-cover"
              src="https://img.freepik.com/foto-gratis/foto-primer-plano-lindo-loro-colores-sobre-fondo-verde_181624-16152.jpg?semt=ais_hybrid&w=740&q=80"
              alt=""
            />

            <div className="flex items-center gap-2">
              <span className="font-bold lg:max-w-none lg:overflow-visible md:text-ellipsis max-w-[200px] truncate whitespace-nowrap overflow-hidden">
                Nombre de usuario
              </span>
            </div>
          </div>
          <span>Descripcion</span>
          <BtnClose />
        </header>
        <section className="p-4 overflow-y-auto flex-1">
          <p>sin comentarios</p>
        </section>
        <footer className="flex items-center gap-2 p-4 bg-white dark:bg-neutral-900 ">
          <section className="w-full gap-2 flex flex-col">
            <section className="flex w-full gap-4">
              <img
                src="https://img.freepik.com/foto-gratis/foto-primer-plano-lindo-loro-colores-sobre-fondo-verde_181624-16152.jpg?semt=ais_hybrid&w=740&q=80"
                className="w-10 h-10 rounded-full object-cover"
                alt="avatar"
              />
              <input
                type="text"
                placeholder="Escribe un comentario..."
                value={comentario}
                onChange={(e) => setComentario(e.target.value)}
                className="flex-1 bg-gray-100 dark:bg-neutral-800 text-sm rounded-2xl px-4 py-2 focus:outline-none resize-none"
              />
              <button className="text-gray-500 hover:text-gray-700 relative">
                <Icon icon="mdi:emoticon-outline" className="text-xl " />
              </button>
            </section>
            <section className="flex justify-end">
              <button
                className="flex justify-end gap-1 px-4 py-2 rounded-full text-sm text-gray-500 cursor-not-allowed"
                onClick={comentarioMutate}
              >
                <Icon icon="iconamoon:send-fill" width="20" height="20" />
                Publicar
              </button>
            </section>
          </section>
        </footer>
      </section>
    </div>
  );
};
