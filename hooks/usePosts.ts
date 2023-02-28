import useSWR from "swr";
import axios from "axios";

const fetcher = (url: string) => axios.get(url).then((res) => res);

interface usePostsProps {
  postId?: number;
  page?: number;
  viewLimit?: number;
}

const axiosGetPostsUrl = "/api/posts/";
export function usePosts(props: usePostsProps) {
  const { data, error, isLoading } = useSWR(
    props?.page || props?.viewLimit
      ? `${axiosGetPostsUrl}?_page=${props.page}&_limit=${props.viewLimit}`
      : `${axiosGetPostsUrl}${props.postId ?? ""}`,
    fetcher
  );

  return {
    posts: data?.data,
    totalCount: data?.headers["x-total-count"],
    isLoading,
    isError: error,
  };
}
