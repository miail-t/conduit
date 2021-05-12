import api from './Requests/axios'
import { User, RegistrationUser, Profile, ArticleType, CommentType, ArticlesRequestParams } from '../type/request'
import { UserInfo } from '../redux/storeType'


export const registrationUser = async (user: RegistrationUser) => {
    return api.post<{ user: User }>('/users', { user: user })
}

export const loginUser = async (user: RegistrationUser) => {
    return api.post<{ user: User }>('/users/login', { user: user })
}

export const getUser = async () => {
    return api.get<{ user: User }>('/user');
}

export const deleteArticle = async (slug: string) => {
    return api.delete(`/articles/${slug}`);
}

export const editUserInfo = async ({ email, username, bio, image, password }: UserInfo) => {
    return api.put('/user', { user: { email, username, bio, image, password } })
}

export const followUser = (username: string) => {
    return api.post<{ profile: Profile }>(`profiles/${username}/follow`)
}

export const unfollowUser = (username: string) => {
    return api.delete<{ profile: Profile }>(`profiles/${username}/follow`)
}

export const getArticle = (slug: string) => {
    return api.get<{ article: ArticleType }>(`articles/${slug}`)
}

export const getComments = (slug: string) => {
    return api.get(`articles/${slug}/comments`)
}

export const addComments = (slug: string, body: string) => {
    return api.post<{ comment: CommentType }>(`articles/${slug}/comments`, { body })
}

export const deleteComments = (slug: string, id: number) => {
    return api.delete<{ comment: CommentType[] }>(`articles/${slug}/comments/${id}`)
}

export const getGlobalFeed = (params: ArticlesRequestParams) => {
    return api.get/* <{ articles: ArticleType[] }> */(`articles`, { params })
}


//////////////////////////////////////////////////////////////////////////

type addArticleType = any

export const addArticle = ({ title, description, body, tagList }: addArticleType) => {
    const response = api.post('/articles', { article: { title, description, body, tagList } })
    return response
}

export const GetProfile = (username: string) => {
    const response = api.get(`/profiles/${username}`)
    return response
}

export const addFavoriteArticle = (slug: string) => {
    return api.post(`articles/${slug}/favorite`);
}

export const deleteFavoriteArticle = (slug: string) => {
    return api.delete(`articles/${slug}/favorite`);
}