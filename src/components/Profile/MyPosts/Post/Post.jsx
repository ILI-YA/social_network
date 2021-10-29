import React from 'react'
import s from './Post.module.css'
import userPhoto from '../../../../assets/images/user.png'


const Post = (props) => {
    return (
        <div className={s.item}>
            <img src={userPhoto} alt='avatar' />
            { props.message }
            <div>
                <span>Like</span> { props.likeCounts }
            </div>
        </div>
    )
}

export default Post;