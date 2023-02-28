import useSWR from "swr";
import axios from "axios";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const axiosGetCommentsUrl = "/api/comments/";
export function useComments(postId?: number) {
  const { data, error, isLoading } = useSWR(
    postId
      ? `${axiosGetCommentsUrl}?postId=${postId}`
      : `${axiosGetCommentsUrl}`,
    fetcher
  );

  return {
    comments: data,
    isLoading,
    isError: error,
  };
}
