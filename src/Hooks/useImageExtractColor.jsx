import { FastAverageColor } from "fast-average-color";
import { useEffect, useState } from "react";

export function useImageExtractColor(imgRef, src) {
  const [bgColor, setBgColor] = useState("#e5e7eb"); // color de fondo inicial

  useEffect(() => { // Hook para extraer el color de una imagen
    const fac = new FastAverageColor(); // Crear una instancia de FastAverageColor
    const img = imgRef.current; // Obtener la referencia de la imagen
    if (!img) return;
    const handleLoad = async () => { // Asegurarse de que la imagen esté cargada
      try {
        const color = await fac.getColorAsync(img); // Extraer el color promedio de la imagen
        setBgColor(color.hex); // Actualizar el estado con el color extraído
      } catch (error) {
        console.warn("Error al extraer el color de la imagen:", error); // Manejar errores al extraer el color
      }
    };
    if(img.complete) { // Si la imagen ya está cargada, ejecutar directamente
      handleLoad();
    }else{
        img.addEventListener("load", handleLoad); // Agregar un listener para cuando la imagen se cargue
        return () => img.removeEventListener("load", handleLoad); // Limpiar el listener al desmontar el componente
    }
  }, [src]);
    return bgColor; // Retornar el color de fondo extraído
}
