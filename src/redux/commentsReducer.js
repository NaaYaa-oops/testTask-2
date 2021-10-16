import { ADD_COMMENT, SHOW_COMMENTS } from './types'

const initialState = {
  comments: [],
}

export function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_COMMENTS:
      return { ...state, comments: [...action.payload] }
    case ADD_COMMENT:
      return { ...state, comments: [...state.comments, action.payload] }
    default:
      return state
  }
}
