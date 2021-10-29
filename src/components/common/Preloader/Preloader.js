import React from 'react';
import preloader from '../../../assets/images/preloader.svg';
import s from './Preloader.module.css';

let Preloader = (props) => {
    return <img className={s.color} src={preloader} alt='preloader' />
}

export default Preloader;