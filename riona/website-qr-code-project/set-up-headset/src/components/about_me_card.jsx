import React from 'react';

import '../css_componets/card_css.css';

import { Card } from 'react-bootstrap';

const AboutMeCard = () => {
    return (
        <Card>
            {/*text colour rewrites react-boostrap - orginally white*/}
            <Card.Header style ={{textAlign: "center"}}>About Me</Card.Header>
            <Card.Body>
                <ul>My name is Riona John. I am a technology intern at Avanade.
                    I am part of of the Emerging Tech team. </ul>

                <ul>For my project I am using the Luxonis camera 
                    and React/React-Boostrap technologies.</ul>
            </Card.Body>
        </Card>
    )
}
export default AboutMeCard