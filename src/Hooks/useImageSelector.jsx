import { useRef, useState } from "react";
import { usePostStore } from "../store/postStore";
import imageCompression from "browser-image-compression";
import { Icon } from "@iconify/react/dist/iconify.js";

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
    if (!type.startsWith("image/") && !type.startsWith("video/")) {
      // Si no es imagen o video, alerta
      alert("Solo se permite imagenes o videos");
      return;
    }
    if (type.startsWith("image/")) {
      if (sizeMB > 2) {
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
        reader.onload = () => setFileUrl(reader.result); // Guarda la URL
        setFile(compressedFile); // Guarda el archivo
        setFilePost(compressedFile); // Guarda el archivo en el store
        setFileType("image"); // Tipo de archivo
      } catch (error) {
        console.log("Error al comprimir la imagen", error);
        alert("Error al comprimir la imagen");
      }
    } else {
      const videoUrl = URL.createObjectURL(selectedFile); // Crea una URL para el video
      setFile(selectedFile); // Guarda el archivo
      setFilePost(selectedFile); // Guarda el archivo en el store
      setFileUrl(videoUrl); // Guarda la URL
      setFileType("video"); // Tipo de archivo
    }
  };

  const removeImage = () => {
    setFile(null)
    setFileUrl("")
    setFileType("")
    if(fileInputRef.current){
      fileInputRef.current.value = ""
    }

  }

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDregging(true);
  }

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDregging(false);
  }

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDregging(true);
  }

  const handleDrop = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDregging(false);
    const droppedFile = e.dataTransfer.files[0];
    if(!droppedFile) return
    await handleImageChange({target: {files: [droppedFile]}})
  }

  return {
    file,
    fileUrl,
    fileType,
    fileInputRef,
    handleImageChange,
    openFileSelector,
    removeImage,
    isDragging,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop
  };
};

export const ImageSelector = () => {
  const {
    file,
    fileUrl,
    fileType,
    fileInputRef,
    handleImageChange,
    openFileSelector,
    removeImage,
    isDragging,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop
  } = useImageSelector();
  return (
    <section className="relative w-full max-w-md bg-[#242526] rounded-lg shadow-xl overflow-hidden">
      <header className="relative h-12 flex items-center justify-center border-b border-gray-700">
        <h2 className="text-white font-medium">Agregar fotos/videos</h2>
        <button className="absolute right-4 text-gray-400 hover:text-white transition-colors duration-200">
          <Icon icon="mdi:close" className="text-xl" />
        </button>
      </header>
      <main className={`p-8 flex flex-col items-center justify-center min-h-[240px] transition-colors duration-300 ${isDragging ? "bg-[#3a3b3c]" : "bg-[#242526]"}`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {fileUrl ? (
          <div className="relative inline-block group">
            {fileType === "image" ? (
              <img
                src={fileUrl}
                className="w-full max-w-[280px] max-h-[280px] rounded-lg object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
            ) : (
              <video
                src={fileUrl}
                className="w-full max-w-[280px] max-h-[280px] rounded-lg object-contain"
              />
            )}
            <button
              type="button"
              className="absolute top-2 right-2 w-8 h-8 bg-black bg-opacity-60 rounded-full border-none cursor-pointer flex items-center justify-center transition duration-300 opacity-0 group-hover:opacity-100 hover:bg-opacity-80" onClick={removeImage}
            >
              <Icon icon="mdi:close" className="text-white text-lg" />
            </button>
            <button
              type="button"
              onClick={openFileSelector}
              className="absolute bottom-2 right-2 w-8 h-8 bg-black bg-opacity-60 rounded-full border-none cursor-pointer flex items-center justify-center transition duration-300 opacity-0 group-hover:opacity-100 hover:bg-opacity-80"
            >
                <Icon icon="lets-icons:edit-fill" className="text-white text-lg" />
            </button>
          </div>
        ) : (
          <>
            <div className="w-16 h-16 rounded-full bg-[#3a3b3c] flex items-center justify-center mb-4">
              <Icon
                icon="mdi:video-image"
                className="text-3xl text-[#e4e6eb]"
              />
            </div>
            <h3 className="text-white text-lg font-medium mb-1">
              Agregar fotos/videos
            </h3>
            <p className="text-gray-400 text-sm">o arrastra y suelta</p>
            <button
              onClick={openFileSelector}
              className="mt-6 px-4 py-2 bg-[#3a3b3c] text-white rounded-lg hover:bg-[#4a4b4c] transition-colors duration-200"
            >
              Seleccionar archivos
            </button>
          </>
        )}
      </main>

      <input
        type="file"
        accept="image/*,video/*"
        ref={fileInputRef}
        onChange={handleImageChange}
        className="hidden"
      />
    </section>
  );
};
