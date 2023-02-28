import axios from "axios";

const instance = axios.create({
  baseURL: window.location.origin,
  headers: {
    "Content-Type": `application/json`,
  },
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      if (error.response.status === 401) alert("비밀번호가 틀렸습니다.");
    }
    return Promise.reject(error);
  }
);

export default instance;
