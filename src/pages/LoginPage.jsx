import logo from "../assets/logoonlydev.png";

export const LoginPage = () => {
  return (
    <main className="flex h-screen w-full">
      {/* Lado izquierdo - banner azul */}
      <section className="bg-[#00b0f0] flex flex-col justify-center items-center overflow-hidden">
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
            <span className="text-3xl font-semibold">
              {" "}
              a tus creadores{" "}
            </span>
            <span className="text-3xl font-semibold">favoritos</span>
          </div>
        </div>
      </section>
      {/* Lado derecha - formulario de inicio de seccion*/}
      <section></section>
    </main>
  );
};
