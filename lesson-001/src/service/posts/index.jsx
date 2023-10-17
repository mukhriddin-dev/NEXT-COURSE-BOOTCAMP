import api from "../axios";
export const usePosts = {
    getPost: async () => api.get("/posts", {cache: "no-store"}),
};
