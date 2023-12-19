import { useSuspenseQuery } from "@tanstack/react-query";

import { getArticles } from "@apis/article/getArticles";

export const useArticlesQuery = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["main-articles"],
    queryFn: () => getArticles(),
    staleTime: Infinity,
  });

  return { articles: data! };
};
