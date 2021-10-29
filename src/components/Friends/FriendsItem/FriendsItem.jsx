import React from 'react';
import s from './FriendsItem.module.css';
import userPhoto from '../../../assets/images/user.png';


const FriendsItem = (props) => {
    return (
        <div className={s.avatar}>
            <img src={userPhoto} alt='avatar' />
            { props.name }

            <img src={userPhoto} alt='avatar' />
            { props.name }

            <img src={userPhoto} alt='avatar' />
            { props.name }
        </div>
    )
}

export default FriendsItem;