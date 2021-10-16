import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { updateCurrentPost } from '../../redux/actions'

export const UpdatePost = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const isUpdated = useSelector(state => state.posts.isUpdated)
  const { id } = useParams()
  const submitHandler = e => {
    e.preventDefault()
    const { title, body } = e.target.elements
    const updated = { title: title.value, body: body.value }
    dispatch(updateCurrentPost(id, updated))
  }
  useEffect(() => {
    if (isUpdated) {
      history.push('/posts-list')
    }
  }, [isUpdated])
  return (
    <div className={'post-form'}>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post title:
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder={'Enter post title:'}
            minLength={2}
            maxLength={20}
            name={'title'}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body">Post body:</label>
          <textarea
            className="form-control"
            placeholder="Enter post body"
            id="body"
            minLength={6}
            maxLength={200}
            name={'body'}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update current post
        </button>
      </form>
    </div>
  )
}
