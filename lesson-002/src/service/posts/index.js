import api from "../axios";

const usePostsApi = {
    getAll: async () => api.get('/posts', { cache: 'force-cache' }),
    getOneById: async (id)=> api.get(`/posts/${id}`)

}

export default usePostsApi;