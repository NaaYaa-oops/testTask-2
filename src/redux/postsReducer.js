import { CREATE_POST, DELETE_POST, FETCH_POSTS, UPDATE_POST } from './types'

const initialState = {
  posts: [],
  newPost: {},
  isUpdated: false,
}

export function postsReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_POST:
      return { ...state, newPost: { ...action.payload } }
    case FETCH_POSTS:
      return {
        ...state,
        posts: [...action.payload],
        isUpdated: initialState.isUpdated,
      }
    case UPDATE_POST:
      return { ...state, isUpdated: !state.isUpdated }
    case DELETE_POST:
      return {
        ...state,
        posts: [...state.posts.filter(e => e.id !== action.payload)],
      }
    default:
      return state
  }
}
