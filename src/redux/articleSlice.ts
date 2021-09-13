import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ArticlesRequestParams, ArticleType } from '../type/request';
import { getGlobalFeed } from '../utils/api';

type InitialState = {
    currentArticles: ArticleType[],
    loading: boolean,
    articlesCount: number
}

const initialState: InitialState = { currentArticles: [], loading: false, articlesCount: 0 };

export const fetchArticles = createAsyncThunk(
    'article/fetchArticles',
    async (params: ArticlesRequestParams) => {
        const response = await getGlobalFeed(params)
        return response.data
    }
)

const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
    },
    extraReducers: builder => {
        builder.addCase(fetchArticles.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(fetchArticles.fulfilled, (state, action) => {
            state.loading = false
            state.currentArticles = action.payload.articles
            state.articlesCount = action.payload.articlesCount
            console.log({ ...state, ...action.payload })
        })
    }
});

export default articleSlice.reducer;
