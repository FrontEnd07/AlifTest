import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    list: null,
    userInfo: null,
    search: '',
    tags: []
}

const PostList = createSlice({
    name: 'PostList',
    initialState,
    reducers: {
        listAc(state, action) {
            state.list = action.payload
        },
        userInfoAc(state, action) {
            state.userInfo = action.payload
        },
        searchAc(state, action) {
            state.search = action.payload
        },
        tagsAc(state, action) {
            state.tags = action.payload
        }
    }
})

export const {
    listAc,
    userInfoAc,
    searchAc,
    tagsAc
} = PostList.actions
export default PostList.reducer