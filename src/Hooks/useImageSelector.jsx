import { useRef, useState } from "react";
import { usePostStore } from "../store/postStore";
import imageCompression from "browser-image-compression";
import { set } from "react-hook-form";

export const useImageSelector = () => {
  // Hook para seleccionar imagenes o videos
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState("");
  const [fileType, setFileType] = useState("");
  const fileInputRef = useRef(null);
  const [isDragging, setIsDregging] = useState(false);
  const { setFile: setFilePost } = usePostStore();
  const openFileSelector = () => {
    // Abre el selector de archivos
    fileInputRef.current?.click();
  };
  const handleImageChange = async (e) => {
    // Maneja el cambio de imagen
    const selectedFile = e.target.files[0]; // Obtiene el archivo seleccionado
    if (!selectedFile) return; // Si no hay archivo, sale de la funcion
    const sizeMB = selectedFile.size / (1024 * 1024); // Tamaño en MB
    const type = selectedFile.type; // Tipo de archivo
    if (!type.startWith("image/") && !type.startWith("video/")) {
      // Si no es imagen o video, alerta
      alert("Solo se permite imagenes o videos");
      return;
    }
    if (type.startWith("image/")) {
      if (sizeMB > 8) {
        alert("El archivo supera el limite de 8MB.");
        return;
      }
      try {
        const options = {
          // Opciones de compresion
          maxSizeMB: sizeMB > 1 ? 0.1 : 0.2,
          maxWidthOrHeight: 1920,
          useWebWorker: true,
        };
        const compressedFile = await imageCompression(selectedFile, options); // Comprime la imagen
        const reader = new FileReader(); // Crea un lector de archivos
        reader.readAsDataURL(compressedFile); // Lee el archivo como URL
        reader.onloadend = () => {
          // Cuando termina de leer
          setFile(compressedFile); // Guarda el archivo
          setFileUrl(reader.result); // Guarda la URL
          setFileType("image"); // Tipo de archivo
          setFilePost(compressedFile); // Guarda el archivo en el store
        };
      } catch (error) {
        console.log("Error al comprimir la imagen", error);
        alert("Error al comprimir la imagen");
      }
    } else {
      const videoUrl = URL.createObjectURL(selectedFile); // Crea una URL para el video
      setFile(selectedFile); // Guarda el archivo
      setFileUrl(videoUrl); // Guarda la URL
      setFileType("video"); // Tipo de archivo
      setFilePost(selectedFile); // Guarda el archivo en el store
    }
  };
  return fileInputRef, handleImageChange, file, fileUrl, fileType;
};

export const ImageSelector = () => {
  const { fileInputRef, handleImageChange, file, fileUrl, fileType } =
    useImageSelector();
  return (
    <div>
      image, video
      <input
        type="file"
        accept="image/*,video/*"
        ref={fileInputRef}
        onChange={handleImageChange}
      />
    </div>
  );
};
