import { BtnClose } from "../ui/buttons/BtnClose"
import {useUsuariosStore} from "../../store/UsuariosStore"

export const FormsPost = () => {
    const {dataUsuarioAuth} = useUsuariosStore()
  return (
    <main className="fixed z-50 flex items-center justify-center inset-0">
        {/* Fondo difuminad */}
        <div className="absolute inset-0 backdrop-blur-sm cursor-pointer"></div>
        <section className="bg-white relative w-full max-w-md dark:bg-bg-dark rounded-lg shadow-xl">
        {/* Header */}
        <header className="flex items-center justify-between p-4 border-b border-gray-500/40">
            <h2 className="text-xl font-semibold">Crear Publicacion </h2>
            <BtnClose />
        </header>
        {/** Use Info */}
        <article>
            <img className="w-10 -h-10 rounded-full mr-3" src={dataUsuarioAuth?.foto_perfil} />
        </article>
        </section>
    </main>
  )
}
