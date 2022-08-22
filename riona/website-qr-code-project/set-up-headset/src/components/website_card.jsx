import React from 'react';

import '../css_componets/card_css.css';

import { Card } from 'react-bootstrap';

const WebsiteCard = () => {
    return (
        <Card>
            {/*text colour rewrites react-boostrap - orginally white*/}
            <Card.Header style ={{textAlign: "center"}}>React/React-Bootstrap Website</Card.Header>
            <Card.Body>
                <ul>This is the website I created for my project.</ul>
                <ul>I created a guide on how to use a HoloLens Gen2 
                    since I felt like as someone who didn't know how to use it either.
                    I wanted to make sure new users have a less confusing experience.</ul>
                <ul>Make sure to check my tips and tricks webpage.</ul>
            </Card.Body>
        </Card>
    )
}
export default WebsiteCard