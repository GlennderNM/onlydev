import { useRelativeTime } from "../../Hooks/useRelativeTime";

export const ComentarioCard = ({ item }) => {
  return (
    <div className="pl-4 ">
      <span>ComentarioCard</span>
      <div className="flex items-start gap-2 group relative w-full:">
        <img src={item?.foto_usuario} className="w-9 h-9 object-cover" />
        <div className="flex-1 relative ">
          <div className="relative bg-gray-100 dark:bg-neutral-800 p-2 rounded-xl text-sm w-fit max-w-[90%] flex gap-2">
            <section>
              <span className="font-semibold block text-xs">
                {item?.nombre_usuario}
              </span>
              <p>{item?.comentario}</p>
            </section>
          </div>
           <div className="flex gap-3 mt-1 text-xs text-gray-500 ml-2 relative">
            <span>{useRelativeTime(item?.fecha)}</span>
            <button className="hover:underline cursor-pointer"> 
              <span>Responder</span>
            </button>
           </div>
          {item?.respuestas_count == 0 && (
            <button className="text-gray-400 mt-2">
              {item?.respuestas_count == 1
                ? `ver ${item?.respuestas_count} respuesta`
                : `ver las ${item?.respuestas_count} respuestas `}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
