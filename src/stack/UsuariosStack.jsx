import { useQuery } from "@tanstack/react-query";
import { useUsuariosStore } from "../store/UsuariosStore"
import {useSubcription} from "../store/AuthStore"

export const useMostrarUsuariosQuery  = ( ) => {
    const {mostrarUsuarioAuth} = useUsuariosStore();
    const {user} = useSubcription();

    return useQuery({
        queryKey: ["Mostrar user auth"],
        queryFn: ()=> mostrarUsuarioAuth({
            id_auth: user?.id
        })
    })
}