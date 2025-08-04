import { Icon } from "@iconify/react/dist/iconify.js";
import { PostImageFrame } from "./PostImageFrame";

export const PublicacionCard = () => {
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
        <p className="mb-2">Titulo</p>
        <div>
          <PostImageFrame src={"https://images.unsplash.com/photo-1590099914662-a76f2f83b802?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8OSUzQTE2fGVufDB8fDB8fHww"}/>
        </div>
      </div>
    </div>
  );
};
