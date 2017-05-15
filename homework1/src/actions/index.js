import { ADD_POST, DELETE_POST, EDIT_POST } from '../constants/actionTypes';

export const addPost = (post) => ({
    type: ADD_POST,
    post   
});

export const editPost = (post) => ({
    type: EDIT_POST,
    post
})

export const deletePost = (postId) => ({
    type: DELETE_POST,
    postId
});