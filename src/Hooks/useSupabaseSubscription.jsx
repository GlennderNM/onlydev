import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { supabase } from "../supabase/supabase.config";

export const useSupabaseSubscription = ({ chanelName, options, queryKey }) => {
  const queryClient = useQueryClient();
  useEffect(() => {
    const subscrition = supabase
      .channel(chanelName)
      .on("postgres_changes", options, (payload) => {
        //const { eventType, new: newData, old: oldData } = payload;
        console.log("Realtime payload:", payload); // 👀 Debug
        const {eventType} = payload
        if (["INSERT", "UPDATE", "DELETE"].includes(eventType)) {
          queryClient.invalidateQueries(queryKey);

          /*queryClient.setQueryData(queryKey, (old) => {
            if (!old) return old;

            // Si tu query usa useInfiniteQuery
            if (old.pages) {
              const updatedPages = [...old.pages];

              switch (eventType) {
                case "INSERT":
                  // Inserta el nuevo post al inicio de la primera página
                  updatedPages[0] = [newData, ...(updatedPages[0] || [])];
                  break;
                case "UPDATE":
                  updatedPages.forEach((page, i) => {
                    updatedPages[i] = page.map((item) =>
                      item.id === newData.id ? newData : item
                    );
                  });
                  break;
                case "DELETE":
                  updatedPages.forEach((page, i) => {
                    updatedPages[i] = page.filter(
                      (item) => item.id !== oldData.id
                    );
                  });
                  break;
                default:
                  break;
              }
            }
          }); */
        }
      })
      .subscribe();
    return () => {
      supabase.removeChannel(subscrition);
    };
  }, [chanelName, options, queryKey, queryClient]);
};
