import React from 'react';

interface HomePageProps{
    category?: number;
}

export default function HomePage(props : HomePageProps){

    return (
        <h1>Home{props.category != null &&  ` ${props.category + 1}`}</h1>
    )
}