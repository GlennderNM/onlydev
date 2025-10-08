import { useMutation, useQuery } from "@tanstack/react-query";
import { useRespuestasComentariosStore } from "../store/RespuestasComentariosStore";
import { useFormattedDate } from "../Hooks/useFormattedDate";
import { useUsuariosStore } from "../store/UsuariosStore";
import { toast } from "sonner";
import { useComentariosStore } from "../store/ComentariosStore";

export const useRespuestasComentariosMutate = () => {
  const {
    insertarRespuestaAComentarios,
    respuestaActivaParaComentarioId,
    respuesta,
    setRespuesta,
  } = useRespuestasComentariosStore();
  const fechaActual = useFormattedDate();
  const { dataUsuarioAuth } = useUsuariosStore();

  return useMutation({
    mutationKey: ["insertar respuesta a comentario"],
    mutationFn: () =>
      insertarRespuestaAComentarios({
        id_comentario: respuestaActivaParaComentarioId,
        comentario: respuesta,
        fecha: fechaActual,
        id_usuario: dataUsuarioAuth?.id,
      }),
    onError: (error) => {
      toast.error("Error al insertar respuesta: " + error.message);
    },
    onSuccess: () => {
      toast.success("Repuesta Enviada");
      setRespuesta("");
    },
  });
};

export const useMostrarRespuestaAComentariosQuery = () => {
  const { mostrarRespuestaAComentarios } = useRespuestasComentariosStore();
  const { itemSelect } = useComentariosStore();

  return useQuery({
    queryKey: [
      "mostrar respuesta comentario",
      { id_comentario: itemSelect?.id },
    ],
    queryFn: () =>
      mostrarRespuestaAComentarios({ id_comentario: itemSelect?.id }), enabled: !!itemSelect
  });
};
