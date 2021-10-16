import React, { useEffect } from 'react'
import { Loader } from '../../components'
import { Post } from './Post'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllPosts } from '../../redux/actions'

export const PostsList = () => {
  const posts = useSelector(state => state.posts.posts)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllPosts())
  }, [])
  if (!posts.length) {
    return <Loader />
  }
  return (
    <div className="d-flex p-5 m-1 flex-wrap">
      <h1>Posts list</h1>
      {posts.map(e => (
        <Post {...e} key={e.id} />
      ))}
    </div>
  )
}
