import { useSuspenseQuery } from "@tanstack/react-query";

import { getChannels } from "@apis/channel/getChannels";

export const useChannelsQuery = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["channels"],
    queryFn: () => getChannels(),
    staleTime: Infinity,
  });

  return { channels: data! };
};

// export const useChannelsQuery = () => {
//   const { data } = useQuery(["channels"], getChannels, {
//     staleTime: Infinity,
//     suspense: true,
//     useErrorBoundary: true
//   });

//   return { channels: data! };
// };
