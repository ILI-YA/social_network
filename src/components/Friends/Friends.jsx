import React from 'react';
import s from './Friends.module.css';
import FriendsItem from './FriendsItem/FriendsItem';

const Friends = () => {

//let nameFriends = props.state.friends.map( n => <FriendsItem id={n.id} name={n.name}/>);
    
    return (
        <div className={s.item}>
            {/* { nameFriends } */}
            <FriendsItem />
        </div>
    )
};

export default Friends;

