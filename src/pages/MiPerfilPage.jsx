import { useMostrarUsuariosQuery } from "../stack/UsuariosStack"

export const MiPerfilPage = () => {
    const {data, isLoading, error} = useMostrarUsuariosQuery()
    if(isLoading){
        return <span>Cargando Data...</span>
    }
    if(error){
        return <span>Error al cargar Usuario... {error.message}</span>
    }
  return (
    <div className="h-screen bg-amber-300 text-black flex flex-col">
        <span>MiPerfilPage</span>
        <span>Usuario: {data?.nombre}</span>
    </div>
  )
}
