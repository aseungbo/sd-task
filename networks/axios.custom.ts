import instance from "./axios.instance";
import { AxiosResponse } from "axios";
import { Comment, Post } from "@/types/dto/dataType.dto";

const axiosGetPostsUrl = "/api/posts/";
export const axiosGetPosts = async (
  page?: number,
  limit?: number
): Promise<AxiosResponse<Post[]>> => {
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
export const axiosGetTargetPost = async (
  postId: number
): Promise<AxiosResponse<Post>> => {
  try {
    const response = await instance.get(`${axiosGetTargetPostUrl}${postId}`);
    return response;
  } catch (error) {
    throw error;
  }
};

const axiosPostPostUrl = "/api/posts/";
export const axiosPostPost = async (
  data: Object
): Promise<AxiosResponse<Post>> => {
  try {
    const response = await instance.post(`${axiosPostPostUrl}`, data);
    return response;
  } catch (error) {
    throw error;
  }
};

const axiosDeletePostUrl = "/api/posts/";
export const axiosDeletePost = async (
  id: number,
  data: Object
): Promise<AxiosResponse<{}>> => {
  try {
    const response = await instance.delete(`${axiosDeletePostUrl}${id}`, data);
    return response;
  } catch (error) {
    throw error;
  }
};

const axiosPatchPostUrl = "/api/posts/";
export const axiosPatchPost = async (
  id: number,
  data: Object
): Promise<AxiosResponse<{}>> => {
  try {
    const response = await instance.patch(`${axiosPatchPostUrl}${id}`, {
      ...data,
      updated_at: new Date().toISOString(),
    });
    return response;
  } catch (error) {
    throw error;
  }
};

const axiosGetCommentsUrl = "/api/comments/";
export const axiosGetComments = async (
  postId?: number
): Promise<AxiosResponse<Comment[]>> => {
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
export const axiosPostComment = async (
  data: Object
): Promise<AxiosResponse<Object>> => {
  try {
    const response = await instance.post(`${axiosPostCommentUrl}`, data);
    return response;
  } catch (error) {
    throw error;
  }
};

const axiosDeleteCommentUrl = "/api/comments/";
export const axiosDeleteComment = async (
  id: number,
  data: Object
): Promise<AxiosResponse<{}>> => {
  try {
    const response = await instance.delete(
      `${axiosDeleteCommentUrl}${id}`,
      data
    );
    return response;
  } catch (error) {
    throw error;
  }
};

const axiosPatchCommentUrl = "/api/comments/";
export const axiosPatchComment = async (
  id: number,
  data: Object
): Promise<AxiosResponse<{}>> => {
  try {
    const response = await instance.patch(`${axiosPatchCommentUrl}${id}`, {
      ...data,
      updated_at: new Date().toISOString(),
    });
    return response;
  } catch (error) {
    throw error;
  }
};
