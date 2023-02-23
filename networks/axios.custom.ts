import instance from "./axios.instance";

const axiosGetPostsUrl = "/api/posts/";
export const axiosGetPosts = async (postId?: number): Promise<any> => {
  try {
    const response = await instance.get(`${axiosGetPostsUrl}${postId ?? ""}`);
    return response;
  } catch (error) {
    throw error;
  }
};

const axiosGetCommentsUrl = "/api/comments/";
export const axiosGetComments = async (commentId?: number): Promise<any> => {
  try {
    const response = await instance.get(
      `${axiosGetCommentsUrl}${commentId ?? ""}`
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
