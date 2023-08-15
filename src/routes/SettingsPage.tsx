import React from 'react';
import { ColorPicker } from 'primereact/colorpicker';

//Use RTK Query to get user settings from database

export default function SettingsPage(){
    return (
        <div className='m-3'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <i className='fa fa-regular fa-gear me-2 mb-1'/>
                <h3 className="navbar-brand">Settings</h3>
            </nav>
            <hr/>
            <div className=''>

            </div>
            <ColorPicker/>
        </div>
    )
}