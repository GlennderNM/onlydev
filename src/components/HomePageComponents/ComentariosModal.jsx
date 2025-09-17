export const ComentariosModal = ({ item, onClose }) => {
  return (
    <div className="fixed inset-0 z-100 bfg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <section className="dark:bg-neutral-900 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-hidden shadow-xl flex flex-col">
        <header>
          <div className="flex items-center gap-3 text-black dark:text-white">
            <img
              className="w-12 h-12 rounded-full object-cover"
              src="https://img.freepik.com/foto-gratis/foto-primer-plano-lindo-loro-colores-sobre-fondo-verde_181624-16152.jpg?semt=ais_hybrid&w=740&q=80"
              alt=""
            />

            <div className="flex items-center gap-2">
              <span className="font-bold lg:max-w-none lg:overflow-visible md:text-ellipsis max-w-[200px] truncate whitespace-nowrap overflow-hidden">
                Nombre de usuario
              </span>
            </div>
          </div>
        </header>
        <span>ComentariosModal</span>
      </section>
    </div>
  );
};
