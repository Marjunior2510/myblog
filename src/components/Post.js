import React, { useState } from 'react'
import marked from 'marked'


const Post = ({article}) => {

    console.log(article)

    const {name, image, description, date} = article.fields
    const postDescription = marked(description)
    const [isActive, setIsActive] = useState(false);

    return (
        <div className='post'>
            <h2 className='title'>{name}</h2>
            {image && <img className='image' src={image.fields.file.url} alt={name} title={name}/>}
            <div className='postdate'>
                <p className='date'>{date}</p>
                <div onClick={() => setIsActive(!isActive)}>{isActive ? 'see less' : 'see more'}</div>
            </div>
            <div className="description">
            
            {isActive && <section dangerouslySetInnerHTML={{ __html: postDescription}} />}
                
            </div>
            

            
            
        </div>
    )
}


export default Post
