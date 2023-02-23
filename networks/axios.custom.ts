import instance from "./axios.instance";

const axiosGetPostsUrl = "/api/posts/";
export const axiosGetPosts = async (
  page?: number,
  limit?: number
): Promise<any> => {
  try {
    const response = await instance.get(
      `${axiosGetPostsUrl}?_page=${page}&_limit=${limit}`
    );
    return response;
  } catch (error) {
    throw error;
  }
};

const axiosGetTargetPostUrl = "/api/posts/";
export const axiosGetTargetPost = async (postId: number): Promise<any> => {
  try {
    const response = await instance.get(`${axiosGetTargetPostUrl}${postId}`);
    return response;
  } catch (error) {
    throw error;
  }
};

const axiosGetCommentsUrl = "/api/comments/";
export const axiosGetComments = async (postId?: number): Promise<any> => {
  try {
    const response = await instance.get(
      postId
        ? `${axiosGetCommentsUrl}?postId=${postId}`
        : `${axiosGetCommentsUrl}`
    );
    return response;
  } catch (error) {
    throw error;
  }
};

const axiosPostCommentUrl = "/api/comments/";
export const axiosPostComment = async (data: Object): Promise<any> => {
  try {
    const response = await instance.post(`${axiosPostCommentUrl}`, data);
    return response;
  } catch (error) {
    throw error;
  }
};
