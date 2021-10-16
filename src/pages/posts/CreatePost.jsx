import React from 'react';
import './createPost.scss';
import {useDispatch} from 'react-redux';
import {createNewPost} from '../../redux/actions';
import {getValues} from '../../helpers/getValues';


export const CreatePost = () => {
    const dispatch = useDispatch();
    const submitHandler = event => {
        event.preventDefault();
        dispatch(createNewPost(getValues(event.target.elements)));
    };
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
                    Create post.
                </button>
            </form>
        </div>
    );
};
