import { Icon } from "@iconify/react/dist/iconify.js";

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
    </div>
  );
};
