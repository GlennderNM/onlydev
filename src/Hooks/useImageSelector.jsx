import { useRef, useState } from "react"
import { usePostStore } from "../store/postStore";

export const useImageSelector = () => {
    const [file, setFile] = useState(null);
    const [fileUrl, setFileUrl] = useState("");
    const [fileType, setFileType] = useState("");
    const fileInputRef = useRef(null)
    const [isDragging, setIsDregging] = useState(false);
    const {setFile:setFilePost} = usePostStore()
    const openFileSelector = () => {
        fileInputRef.current?.click()
    }
    const handleImageChange = async (e) => {
        const selectedFile = e.target.files[0]
        if(!selectedFile) return
        const type = selectedFile.type;
        if(!type.startWith("image/") && !type.startWith("video/")){
            alert("Solo se permite imagenes o videos")
            return
        }
        if(type.startWith("image/")){
            
        }
    }
  return (
    <div className="h-screen bg-amber-300 text-black">
        <span>useImageSelector</span>
    </div>
  )
}

export const ImageSelector = () => {
    return <div>
        Hola soy image selector
    </div>
}