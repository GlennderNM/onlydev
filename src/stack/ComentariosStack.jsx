import { useMutation } from "@tanstack/react-query";
import { useComentariosStore } from "../store/ComentariosStore";
import { useUsuariosStore } from "../store/UsuariosStore";
import { usePostStore } from "../store/postStore";
import { useFormattedDate } from "../Hooks/useFormattedDate";
import { toast } from "sonner";

export const useInsertarComentarioMutate = (p) => {
  const { insertarComentrio } = useComentariosStore();
  const { dataUsuarioAuth } = useUsuariosStore();
  const { itemSelect } = usePostStore();
  const fechaActual = useFormattedDate();

  return useMutation({
    mutationKey: ["insertar comentario"],
    mutationFn: () =>
      insertarComentrio({
        comentario: p.comentario,
        id_usuario: dataUsuarioAuth?.id,
        id_publicacion: itemSelect?.id,
        fecha: fechaActual,
      }),
    onError: (error) => {
      toast.error("Error al comentar post: " + error.message);
    },
    onSuccess: () => {
      toast.success("comentario agregado ");

      p.setComentario("");
    },
  });
};
