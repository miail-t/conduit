export type State = {
    articles: Articles
    user: User
}

export type User = {
    email: string,
    token: string,
    username: string,
    bio: string,
    image: string | null,
    loading: boolean;
}

export type Articles = {
    currentArticles: Article[];
    loading: boolean;
    articlesCount: number
}

export type Article = {
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

export type Profile = {
    username: string,
    bio: string,
    image: string,
    following: boolean
}

export type UserInfo = {
    email?: string,
    username?: string,
    bio?: string,
    image?: string,
    password?: string
}