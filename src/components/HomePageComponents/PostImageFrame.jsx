import { useRef } from "react";
import { useImageExtractColor } from "../../Hooks/useImageExtractColor";

export const PostImageFrame = ({ src }) => {
  const imgRef = useRef(null); // Crear una referencia para la imagen
  const bgColor = useImageExtractColor(imgRef, src); // Usar el hook para extraer el color de la imagen

  return (
    <div className="rounded-lg overflow-hidden flex items-center justify-center max-h-[500p]"  style={{ backgroundColor: bgColor }}> {/* Aplicar el color de fondo extraído */}
      <img ref={imgRef} src={src} crossOrigin="anonymous" alt="aterno" className="object-contain max-h-[500px]" />
    </div>
  );
};
 