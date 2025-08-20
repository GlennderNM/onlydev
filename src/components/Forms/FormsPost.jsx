import { BtnClose } from "../ui/buttons/BtnClose";
import { useUsuariosStore } from "../../store/UsuariosStore";
import {  useRef, useState } from "react";
import EmojiPicker from 'emoji-picker-react';
import { Icon } from "@iconify/react/dist/iconify.js";

export const FormsPost = () => {
  const { dataUsuarioAuth } = useUsuariosStore();
  const [showEmojiPicker, setEmojiPicker] = useState(false)
  const textareaRef = useRef(null)
  const [postText, setPostText] = useState("")
  const addEmoji = (emojiData) => {
    const emojiChar = emojiData.emoji;
    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

  }

  return (
    <section className="fixed z-50 flex items-center justify-center inset-0">
      {/* Fondo difuminad */}
      <div className="absolute inset-0 backdrop-blur-sm cursor-pointer"></div>
      <section className="bg-white relative w-full max-w-md dark:bg-bg-dark rounded-lg shadow-xl">
        {/* Header */}
        <header className="flex items-center justify-between p-4 border-b border-gray-500/40">
          <h2 className="text-xl font-semibold">Crear Publicacion </h2>
          <BtnClose />
        </header>
        {/** Use Info */}
        <main className="p-4 space-y-4">
          <section className="flex items-center gap-3">
            <img
              className="w-10 h-10 rounded-full mr-3 object-cover"
              src={dataUsuarioAuth?.foto_perfil}
            />
            <div>
              <span className="font-medium">{dataUsuarioAuth?.nombre}</span>
            </div>
          </section>
          <form>
            <div className="relative">
                <textarea ref={textareaRef} placeholder="Que estas pensando?" className="w-full placeholder-gray-500 outline-none">
                </textarea>
                {
                    showEmojiPicker && <div className="absolute top-10 left-10 mt-2 ">
                        <EmojiPicker onEmojiClick={addEmoji} theme="auto" />
                    </div>
                }
                <div onClick={() => setEmojiPicker(!showEmojiPicker) } className="mt-4 flex items-center justify-between">
                    <button type="submit" className="py-2 px-4 rounded-lg font-medium bg-primary cursor-pointer">Publicar</button>
                    <button type="button" className="p-1 text-black/50 dark:text-white/50 hover:bg-gray-700 rounded-full cursor-pointer">
                        <Icon icon="mdi:emoticon-outline" className="text-2xl" />
                    </button>
                </div>
            </div>
          </form>
        </main>
        <footer></footer>
      </section>
    </section>
  );
};
