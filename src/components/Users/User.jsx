import React from 'react';
import s from './User.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';

let User = ({ user, followingInProgress, unfollow, follow, ...props}) => {

    return <div>
        <div>
            <NavLink to={'/profile/' + user.id}>
                <img src={ user.photos.small != null ? user.photos.small : userPhoto } alt='avatar' className={s.avatar} />
            </NavLink>
        </div>
        <div> 
            { user.followed 
            ? <button disabled={followingInProgress.some(id => id === user.id)} 
                onClick={ () => { unfollow(user.id);} }>
                    Unfollow</button> 
            : <button disabled={followingInProgress.some(id => id === user.id)} 
                onClick={ () => { follow(user.id);} }>
                    Follow</button> }
        </div>
        <div>
            <p>{user.name}</p>
            <p>{user.status}</p>
        </div>
        <div>
            <p>{'user.location.city'}</p>
            <p>{'user.location.country'}</p>
        </div>
    </div>
}

export default User;