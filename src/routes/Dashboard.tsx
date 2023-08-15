import React, { useState } from 'react';
import SideBar from '../components/SideBar';
import CalendarPage from './CalendarPage';
import HomePage from './HomePage';
import RecentlyDeletedPage from './RecentlyDeletedPage';
import SavedPage from './SavedPage';
import SettingsPage from './SettingsPage';

export default function Dashboard(){
    const [option, setOption] = useState(0);
    const [notesSelected, setNotesSelected] = useState(-1);

    return (
        <div className='d-flex'>
            <SideBar setChosenOption={setOption} setNotesSelected={setNotesSelected}/>
            <div className='vr'/>
            <div className='col' style={{width: "100%"}}>
                { (option == 0) && <HomePage/> }
                { (option == 1) && <SavedPage /> }
                { (option == 2) && <HomePage category={notesSelected} />}
                { (option == 3) && <CalendarPage /> }
                { (option == 4) && <RecentlyDeletedPage /> }
                { (option == 5) && <HomePage category={3} />}
                { (option == 6) && <SettingsPage />}
            </div>
        </div>
    )
}