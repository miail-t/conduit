import { type } from "os"

export type User = {
    email: string,
    token: string,
    username: string,
    createdAt: string,
    updatedAt: string,
    bio: string,
    image: string,
}

export type RegistrationUser = {
    username?: string,
    email: string,
    password: string
}

export type UserInfo = {
    email: string,
    username: string,
    bio?: string,
    image?: string,
    password?: string
}

export type Profile = {
    username: string,
    bio: string,
    image: string,
    following: boolean
}

export type ArticleType = {
    slug: string
    title: string,
    description: string,
    body: string
    tagList: string[],
    createdAt: string,
    updatedAt: string,
    favorited: boolean,
    favoritesCount: number,
    author: Profile
}

export type CommentType = {
    id: number,
    createdAt: string,
    updatedAt: string,
    body: string,
    author: Profile
}

export type ArticlesRequestParams = {
    limit: number,
    offset: number,
    tag?: string,
    author?: string,
    favorited?: boolean
}