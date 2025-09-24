import { Icon } from "@iconify/react/dist/iconify.js";
import { PostImageFrame } from "./PostImageFrame";
import { PostVideoFrame } from "./PostVideoFrame";
import { usePostStore } from "../../store/postStore";
import { useLikesPostMutate } from "../../stack/PostStack";
import { useComentariosStore } from "../../store/ComentariosStore";

export const PublicacionCard = ({ item }) => {
  const { setItemSelect } = usePostStore();
  const { mutate } = useLikesPostMutate();
  const { setShowModal } = useComentariosStore();

  return (
    <div className="border-b border-gray-500/50 p-4">
      <div className="flex justify-between">
        <div className="flex items-center gap-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/DEV_at_2011_MMVA.jpg/640px-DEV_at_2011_MMVA.jpg"
            className="w-12 h-12 rounded-full object-cover"
          />
          <span className="font-bold">Nombre de Usuario</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-500 text-sm whitespace-nowrap">
            Hace 2 horas
          </span>
          <button>
            <Icon icon="mdi:dots-horizontal" className="text-gray-500" />
          </button>
        </div>
      </div>
      <div className="mt-3">
        <p className="mb-2">{item?.descripcion}</p>
        <div>
          {item?.url !== "-" &&
            (item?.type === "imagen" ? (
              <PostImageFrame src={item?.url} />
            ) : (
              <PostVideoFrame src={item?.url} />
            ))}
        </div>
        <div className="flex justify-between mt-4">
          <button
            onClick={() => {
              setItemSelect(item);
              mutate();
            }}
          >
            <Icon
              icon={
                item?.like_usuario_actual ? "mdi:heart" : "mdi:heart-outline"
              }
              className={`text-3xl p-1 rounded-full ${
                item?.like_usuario_actual
                  ? "text-[#0091ea]"
                  : " text-gray-400 hover:bg-[rgba(78,184,233,0.2)]"
              } cursor-pointer`}
            />
          </button>
          <button
            className="flex items-center gap-2 cursor-pointer" onClick={() => {
              setItemSelect(item)
              setShowModal()
            } }
          >
            <Icon
              icon={"mdi:comment-outline"}
              className="text-3xl p-1 rounded-full text-gray-400 cursor-pointer"
            />
            <span className="text-xs md:text-sm text-gray-400">Comentar</span>
          </button>
        </div>
        <div className="flex gap-4 mt-1">
          {item?.likes > 0 && (
            <spam className="text-xs text-gray-400">
              {item?.likes} me gusta{" "}
            </spam>
          )}
          {item?.comentarios_count == 0 && (
            <span className="text-xs text-gray-400 cursor-pointer hover:underline">
              {item?.comentarios_count} comentarios
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
