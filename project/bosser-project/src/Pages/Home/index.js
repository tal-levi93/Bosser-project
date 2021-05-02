import logo from './logo.png'
import React from 'react';
import Courses from '../Courses/courses';

const Home = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width:'100%',
                backgroundColor: 'black'
            }}
        >

            <Logo/>

            </div>
    );
};

export default Home;

function Logo (){
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width:'100%',
                backgroundColor: 'black'
            }}
        >

            <img src={logo} />

        </div>

    );
};

function Content (){
    return (
        <div
            style={{



            }}
        >

             
        </div>

    );
};

