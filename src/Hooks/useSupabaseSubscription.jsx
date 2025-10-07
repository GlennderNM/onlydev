import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { supabase } from "../supabase/supabase.config";

export const useSupabaseSubscription = ({ chanelName, options, queryKey }) => {
  const queryClient = useQueryClient();
  useEffect(() => {
    const subscrition = supabase
      .channel(chanelName)
      .on("postgres_changes", options, (payload) => {
        console.log("Realtime payload:", payload); // 👀 Debug
        const { eventType } = payload;
        if (["INSERT", "UPDATE", "DELETE"].includes(eventType)) {
          queryClient.invalidateQueries(queryKey);
          //queryClient.invalidateQueries({ queryKey, exact: false });

        }
      })
      .subscribe();
    return () => {
      supabase.removeChannel(subscrition);
    };
  }, [chanelName, options, queryKey, queryClient]);
};
