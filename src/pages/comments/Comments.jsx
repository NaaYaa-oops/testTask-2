import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {
    addCommentToCurrentPost,
    getCurrentPostComments,
} from '../../redux/actions';


export const Comments = () => {
    const {id} = useParams();
    const comment = useRef();
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.posts);
    const currentComments = useSelector(state => state.comments.comments);

    useEffect(() => {
        dispatch(getCurrentPostComments(id));
    }, []);

    const submitHandler = e => {
        e.preventDefault();
        dispatch(addCommentToCurrentPost(+id, comment.current.value));
    };

    // if (!currentComments.length) {
    //     return <Loader/>;
    // }
    return (
        <div>
            <div className={'d-flex align-items-center'}>
                <h1>Comments to: &nbsp;</h1>
                <strong>{posts[id - 1].title}</strong>
            </div>
            {currentComments.map(e => (
                <div key={e.id}>
                    <hr/>
                    <h3>>{e.body}</h3>
                    <hr/>
                </div>
            ))}
            <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <label htmlFor="comment">
                        <strong>Write a comment:</strong>
                    </label>
                    <textarea
                        className="form-control"
                        placeholder="Enter post body"
                        id="comment"
                        minLength={6}
                        maxLength={200}
                        ref={comment}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Post comment.
                </button>
            </form>
        </div>
    );
};
