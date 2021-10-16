import React from 'react'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {deleteCurrentPost} from '../../redux/actions'


export const Post = (props) => {
    const dispatch = useDispatch()
    const deleteHandler = () => {
        dispatch(deleteCurrentPost(props.id))
    }
    return (
        <div className="card m-5" style={{width: '18rem'}}>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.body}</p>
                <Link className={'btn btn-primary'}
                      to={`/post-comments/${props.id}`}>show
                    comments</Link>
                <hr/>
                <Link className={'btn btn-warning'}
                      to={`/post-update/${props.id}`}>update post</Link>
                <hr/>
                <button className={'btn btn-danger'}
                        onClick={deleteHandler}>delete post
                </button>
            </div>
        </div>
    )
}

