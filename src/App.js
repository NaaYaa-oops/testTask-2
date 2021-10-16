import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {Comments, CreatePost, PostsList, UpdatePost} from './pages'
import {Navbar} from './components'
import {connect} from 'react-redux'


function App({posts}) {

    return (
        <div className="App">
            <Navbar/>
            <Switch>
                <Route path={'/posts-list'} component={PostsList} exact/>
                <Route path={'/post-comments/:id'} exact>
                    {posts.length ? <Comments/> :
                        <Redirect to={'/posts-list'}/>}
                </Route>
                <Route path={'/post-create'} component={CreatePost} exact/>
                <Route path={'/post-update/:id'} component={UpdatePost} exact/>
                <Redirect to={'/posts-list'} from={'*'}/>
            </Switch>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts.posts
    }
}

export default connect(mapStateToProps)(App)
