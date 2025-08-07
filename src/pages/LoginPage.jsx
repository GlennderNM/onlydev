import { Icon } from "@iconify/react/dist/iconify.js";
import logo from "../assets/logoonlydev.png";
import { useEffect, useState } from "react";
import { useGenerarCodigosAleatorios } from "../Hooks/useGenerarCodigosAleatorios";
import { useAuthStore } from "../store/AuthStore";
import { useCrearUsuarioYSesionMutate } from "../stack/LoginStack";
import { Toaster } from "sonner";
import { useForm } from "react-hook-form";



export const LoginPage = () => { 
  const [showPassword, setShowPassword] = useState(false); // Estado para controlar la visibilidad de la contraseña
  const { setCredenciales } = useAuthStore(); // Hook para acceder al store de autenticación
  const [email, setEmail] = useState(); // Estado para almacenar el email
  const [password, setPassword] = useState(); // Estado para almacenar la contraseña

  const togglePasswordVisibility = () => { // Función para alternar la visibilidad de la contraseña
    setShowPassword(!showPassword);
  };

  const {handleSubmit} = useForm(); // Hook de react-hook-form para manejar el formulario, aunque no se usa directamente aquí
  const {isPending, mutate} = useCrearUsuarioYSesionMutate(); // Hook para manejar la mutación de creación de usuario y sesión
  
  const response = useGenerarCodigosAleatorios(); // Hook para generar códigos aleatorios
  useEffect(() => {
    const correoCompleto = response + "@gmail.com"; // Genera un correo aleatorio
    setCredenciales({ email: correoCompleto, password: response}) // Guarda las credenciales en el store
    setEmail(correoCompleto); // Actualiza el estado del email
    setPassword(response);  // Actualiza el estado de la contraseña
  }, [])

  return (
    <main className="flex h-screen w-full">
      <Toaster />
      {/* Lado izquierdo - imagen y texto descriptivo */}
      <section
        className="hidden md:flex md:w-1/2 bg-[#00b0f0] 
       flex-col justify-center items-center overflow-hidden"
      >
        <div className="px-8 text-white text-center flex flex-col gap-4">
          <div className="flex items-center gap-3 justify-center">
            <img src={logo} className="h-20 w-20" />
            <span className="text-4xl font-bold text-[#cceffc]">
              Only<span className="text-[#ffffff]">Devs</span>
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-semibold">
              Registrate para apoyar
            </span>
            <span className="text-3xl font-semibold"> a tus creadores </span>
            <span className="text-3xl font-semibold">favoritos</span>
          </div>
        </div>
      </section>
      {/* Lado derecha - formulario de inicio de seccion*/}
      <section className="w-full md:w-1/2 flex items-center justify-center px-6 md:px-16 py-8">
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-medium mb-6 text-center">
            Inicia sesión{" "}
            <span className="text-[#0091ea] text-xl"> (modo invitado)</span>
          </h1>
          <form onSubmit={handleSubmit(mutate)}>
            <div className="mb-4">
              <input
                placeholder="Email"
                value={email}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00aff0]"
              />
            </div>
            <div className="relative mb-4">
              <input
                placeholder="Password"
                value={password}
                type={showPassword ? "text" : "password"}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00aff0]"
              />
              <button
                className="absolute top-1/2 -translate-y-1/2 right-3 text-gray-500 cursor-pointer"
                type="button"
                onClick={togglePasswordVisibility}
              >
                <Icon icon={showPassword ? "mdi:eye-off" : "mdi:eye"} />
              </button>
            </div>
            <button
              type="submit"
              className="w-full bg-gray-200 text-gray-500 font-medium py-3 rounded-full hover:bg-[#00aff0] transition duration-200 cursor-pointer hover:text-white" disabled={isPending}
            >
              Iniciar sesión
            </button>
          </form >
          <div className="mt-4 text-xs text-gray-500 text-center">
            Al iniciar sesión y usar OnlyDevs, aceptas nuestros {" "}
            <a href="#" className="text-[#00aff0]">
              Términos de servicio {" "}
            </a>
            y {" "}
            <a href="#" className="text-[#00aff0]">
              Política de privacidad {" "}
            </a>
            y confirmas que tienes al menos 18 años.
          </div>
          <div  className="mt-6 text-center">
            <a href="#" className="text-[#00aff0] text-sm">
                Has olvidado tu contraseña?
            </a>
            <div className="mt-1">
                <a href="#" className="text-[#00aff0] text-sm">
                    Registrate para OnlyDevs
                </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
