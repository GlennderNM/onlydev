import { Icon } from "@iconify/react/dist/iconify.js"
import { NavLink } from "react-router-dom"

export const Sidebar = () => {
  const links = [
    {
      label: "Inicio",
      icon: "ic:baseline-home",
      to: "/",
    },
    {
      label: "Notificaciones",
      icon: "ic:baseline-notifications",
      to: "/notificaciones",
    },
    {
      label: "Mensajes",
      icon: "ic:baseline-message",
      to: "/mensajes",
    },
    {
      label: "Colecciones",
      icon: "ic:baseline-collections-bookmark",
      to: "/colecciones",
    },
    {
      label: "Suscripciones",
      icon: "ic:baseline-person",
      to: "/suscripciones",
    },
    {
      label: "Añadir tarjeta",
      icon: "ic:baseline-credit-card",
      to: "/tarjeta",
    },
    {
      label: "Mi Perfil",
      icon: "ic:baseline-account-circle",
      to: "/miperfil",
    },
  ]
  return (
    <div className="h-screen p-2 bg-white dark:bg-bg-dark transition-all duration-300 ">
        {/* Logo */}
        <div>
          ONLYDEVS 
        </div>
        {/* NAV */}
        <nav className="flex-1 flex flex-col gap-2 items-center">
          {links.map((item, index) => {
            return(
              <NavLink key={index} to={item.to} className={({isActive})=>`flex items-center pag-3 p-2 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-primary/10 dark:hover:text-primary transition-all w-full justify-start ${
                isActive ? "text-blue-600 dark:text-white" : "text-gray-600 dark:text-gray-400"
              }`}>
                <Icon icon={item.icon} width={24} height={25}/>
                <span>{item.label}</span>
              </NavLink>
            )
          })}
        </nav>
    </div>
  )
}
