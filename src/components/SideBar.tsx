import React, { useState } from 'react';
import NavLink, { NavLinkProps } from './NavLink';
import { ButtonGroup, Dropdown, DropdownButton } from 'react-bootstrap';
import DropDownLink from './DropDownLink';

interface SideBarProps{
    setChosenOption : (option : number) => void;
    setNotesSelected : (option: number) => void;
}

export default function SideBar(props : SideBarProps){
    const [option, setOption] = useState(0);
    const folderLinks : NavLinkProps[] = [
        {
            iconName: "",
            navText: "Ex1",
            active: false,
            onClick: () => {}
        },
        {
            iconName: "",
            navText: "Ex2",
            active: false,
            onClick: () => {}
        }
    ];

    function onClick(opt: number){
        setOption(opt);
        props.setChosenOption(opt);
        props.setNotesSelected(-1);
    }

    return(
        <div className='d-flex flex-column flex-shrink-0 p-3 text-white bg-dark col-3' style={{width: '280px', height: '100vh'}}>
            <h3>Noted</h3>
            <hr/>
            <ul className='nav nav-pills flex-column mb-auto'>
                <li className='nav-item'>
                    <NavLink iconName='fa fa-home' navText='Home' onClick={() => onClick(0)} active={option == 0} />
                </li>
                <li className='nav-item'>
                    <NavLink iconName='fa fa-regular fa-bookmark' navText='Saved' onClick={() => onClick(1)} active={option == 1} />
                </li>
                <li className='nav-item'>
                    <DropDownLink iconName='fa fa-regular fa-folder' navText='Folder' downIcon="fa fa-angle-down" 
                        upIcon="fa fa-angle-up" links={folderLinks} active={option == 2} onClick={() => onClick(2)} 
                        setNotesOption={props.setNotesSelected} />
                </li>
                <li className='nav-item'>
                    <NavLink iconName='fa fa-solid fa-calendar' navText='Calendar' onClick={() => onClick(3)} active={option == 3} />
                </li>
            </ul>
            <div className='nav-item p-3 danger'>
                <NavLink iconName='fa fa-trash' navText='Recently Deleted' onClick={() => onClick(4)} active={option == 4} />
            </div>
            <hr/>
            <DropdownButton
              as={ButtonGroup}
              key={"up"}
              id={`dropdown-button-drop-${"up"}`}
              drop={"up"}
              variant="secondary"
              title={` User Name `}

            >
              <Dropdown.Item eventKey="1" onClick={() => onClick(5)} active={option == 5}>Profile</Dropdown.Item>
              <Dropdown.Item eventKey="2" onClick={() => onClick(6)} active={option == 6}>Settings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">Log Out</Dropdown.Item>
            </DropdownButton>
        </div>
    )
}