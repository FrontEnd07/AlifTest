import {configureStore} from "@reduxjs/toolkit";
import PostList from './reducers/PostList/PostList'

export const store = configureStore({
    reducer: {
        PostList
    },
    devTools: true
})

window.store = store;