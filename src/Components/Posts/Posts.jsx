import React from 'react';
import s from './Posts.module.css';
import Add_new_post from './Add_new_post/Add_new_post';
import Post from './Post/Post.jsx';



const Posts = (props) => {

    let postsElements = props.postsData
        .map( (p) => {
        return (
            <Post message={p.message} likesCount={p.likesCount}/>
        )
    })


    return (
        <div className={s.posts}>
            <Add_new_post addPost={props.addPost}
                          changeTextArea={props.changeTextArea}
                          postTextArea={props.postTextArea}/>
            {postsElements}
        </div>
    )
}

export default Posts;