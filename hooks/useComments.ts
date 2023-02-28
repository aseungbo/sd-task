import useSWR from "swr";
import axios from "axios";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const axiosGetCommentsUrl = "/api/comments/";
export function useComments(postId?: number, commentId?: number) {
  const { data, error, isLoading } = useSWR(
    postId
      ? `${axiosGetCommentsUrl}${
          commentId
            ? `?postId=${postId}&parent=${commentId}`
            : `?postId=${postId}`
        }`
      : `${axiosGetCommentsUrl}`,
    fetcher
  );

  return {
    comments: data,
    isLoading,
    isError: error,
  };
}
