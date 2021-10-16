import axios from 'axios';
import {API_URL} from '../helpers/url';
import {
    ADD_COMMENT,
    CREATE_POST,
    DELETE_POST,
    FETCH_POSTS,
    SHOW_COMMENTS,
    UPDATE_POST,
} from './types';


export function createNewPost(post) {
    return dispatch => {
        (async () => {
            await axios
                .post(`${API_URL}posts`, post)
                .then(r => dispatch({type: CREATE_POST, payload: r.data}));
        })();
    };
}

export function fetchAllPosts() {
    return dispatch => {
        (async () => {
            await axios
                .get(`${API_URL}posts`)
                .then(r => dispatch({type: FETCH_POSTS, payload: r.data}));
        })();
    };
}

export function getCurrentPostComments(id) {
    return dispatch => {
        (async () => {
            await axios
                .get(`${API_URL}posts/${id}`,
                    {params: {_embed: 'comments'}})
                .then(r => dispatch(
                    {type: SHOW_COMMENTS, payload: r.data.comments}));
        })();
    };
}

export function updateCurrentPost(id, updatedPost) {
    return dispatch => {
        (async () => {
            await axios
                .put(`${API_URL}posts/${id}`, updatedPost)
                .then(r => dispatch({type: UPDATE_POST, payload: r.data}));
        })();
    };
}

export function deleteCurrentPost(id) {
    return dispatch => {
        (async () => {
            await axios
                .delete(`${API_URL}posts/${id}`)
                .then(r => dispatch({type: DELETE_POST, payload: id}));
        })();
    };
}

export function addCommentToCurrentPost(postId, body) {
    return dispatch => {
        (async () => {
            await axios
                .post(`${API_URL}comments`, {postId, body})
                .then(r => dispatch({type: ADD_COMMENT, payload: r.data}));
        })();
    };
}
