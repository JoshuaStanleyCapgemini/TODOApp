import React from 'react';

export interface NavLinkProps {
    iconName: string;
    navText: string;
    active: boolean;
    className?: string;
    onClick : () => void;
}

export default function NavLink(props: NavLinkProps){
    return (
        <a className={'nav-link' + (props.active ? " active" : "")} onClick={props.onClick}>
            <i className={props.iconName} ></i>
            <label className='ms-2 clickable'>{props.navText}</label>
        </a>
    )
}