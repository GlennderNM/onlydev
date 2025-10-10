import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useUsuariosStore } from "../store/UsuariosStore";
import { useSubcription } from "../store/AuthStore";
import { useGlobalStore } from "../store/GlobalStore";
import { toast } from "sonner";

export const useMostrarUsuariosQuery = () => {
  const { mostrarUsuarioAuth } = useUsuariosStore();
  const { user } = useSubcription();

  return useQuery({
    queryKey: ["Mostrar user auth"],
    queryFn: () =>
      mostrarUsuarioAuth({
        id_auth: user?.id,
      }),
  });
};

export const useEditarFotoUserMutate = () => {
  const { file } = useGlobalStore();
  const { editarUsuarios, dataUsuarioAuth } = useUsuariosStore();
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["editar foto user"],
    mutationFn: async (data) => {
      if (file.size === undefined) {
        return;
      }
      const p = {
        nombre: data.nombre,
        id: dataUsuarioAuth?.id,
      };
      await editarUsuarios(p, dataUsuarioAuth?.foto_perfil, file);
    },
    onError: (error) => {
      toast.error("Error al editar usuario: " + error.message);
    },
    onSuccess: () => {
      if (file.size === undefined) {
        return toast.info("Seleccione una imagen");
      }
      toast.success("Datos guardados");
      queryClient.invalidateQueries(["Mostrar user auth"]);
    },
  });
};

export const useContarUsuariosTodosQuery = () => {
  const { contarUsuariosTodos } = useUsuariosStore();

  return useQuery({
    queryKey: ["contar usuarios todos"],
    queryFn: contarUsuariosTodos,
  });
};
