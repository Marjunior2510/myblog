import React from 'react'
import Post from './Post'
const Posts = ({posts}) => {
    return (
        <div className="groupo">
            {posts.map((article, index) => <Post article={article} key={index} />)}
        </div>
    )
}

Posts.propTypes = {

}

export default Posts
