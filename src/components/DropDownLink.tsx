import React, { useState } from "react";
import NavLink, { NavLinkProps } from "./NavLink";

interface DropDownLinkProps extends NavLinkProps{
    downIcon: string;
    upIcon: string;
    links: NavLinkProps[];
    setNotesOption: (opt : number) => void;
}

export default function DropDownLink(props: DropDownLinkProps){
    const [dropped, setDropped] = useState(false);
    const [option, setOption] = useState(-1);

    function setNotes(opt: number){
        setOption(opt);
        props.onClick()
        props.setNotesOption(opt);
    }

    return (
        <div>
            <div className='nav-link' onClick={() => setDropped(!dropped)}>
                <i className={props.iconName} ></i>
                <label className='ms-2 me-2'>{props.navText}</label>
                <i className={dropped ? props.upIcon : props.downIcon}></i>
            </div>
            {dropped && 
                <ul className="nav nav-pills flex-column mb-auto ms-4">
                    {props.links.map((x, idx) => {
                        return (<li className="nav-item" key={idx}>
                            <NavLink iconName={x.iconName} navText={x.navText} onClick={() => setNotes(idx)} 
                                active={(option == idx) && (props.active)} />
                        </li>)}
                        )}
                </ul>
            }
        </div>
    )
}