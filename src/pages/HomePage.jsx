import { Icon } from "@iconify/react/dist/iconify.js";
import { HeaderSticky } from "../components/HomePageComponents/HeaderSticky";
import { InputPublicar } from "../components/HomePageComponents/InputPublicar";
import { PublicacionCard } from "../components/HomePageComponents/PublicacionCard";
import { FormsPost } from "../components/Forms/FormsPost";
import { usePostStore } from "../store/postStore";

export const HomePage = () => {
  const {stateForm, setStateForm} = usePostStore()
  return (
    <main className="flex min-h-screen bg-white dark:bg-bg-dark max-w-[1200px] mx-auto">
      {
        stateForm && <FormsPost />
      }
      <section className="flex flex-col w-full h-screen">
        <article className="flex flex-col h-screen overflow-hidden border border-gray-200 border-t-0 border-b-0 dark:border-gray-600">
          <HeaderSticky />
          <div className="overflow-y-auto">
            <InputPublicar />
            <PublicacionCard />

          </div>
          Principal
        </article>
        <article>Sidebar derecho</article>
      </section>
    </main>
  );
};
  