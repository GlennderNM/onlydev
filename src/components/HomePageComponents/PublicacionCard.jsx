import { Icon } from "@iconify/react/dist/iconify.js";
import { PostImageFrame } from "./PostImageFrame";
import { PostVideoFrame } from "./PostVideoFrame";

export const PublicacionCard = ({ item }) => {
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
          <button>
            <Icon
              icon={"mdi:heart-outline"}
              className="text-3xl p-1 rounded-full text-gray-400 hover:bg-[rgba(78,184,233,0.2)] cursor-pointer"
            />
          </button>
          <button className="flex items-center gap-2 cursor-pointer">
            <Icon
              icon={"mdi:comment-outline"}
              className="text-3xl p-1 rounded-full text-gray-400 cursor-pointer"
            />
            <span className="text-xs md:text-sm text-gray-400">Comentar</span>
          </button>
        </div>
      </div>
    </div>
  );
};
