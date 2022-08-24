import React from 'react';

import '../css_componets/card_css.css';

import { Card } from 'react-bootstrap';
import { Magic } from 'react-bootstrap-icons';

const DirectToTips = () => {
    return (
        <Card className="Tips">
            {/*text colour rewrites react-boostrap - orginally white*/}
            <Card.Header style={{ textAlign: "center" }}>
                Now you can start using the HoloLens Head To Tips 
                &nbsp; {/* space in line */}
                <a href="http://localhost:3000/tips-and-tricks">
                    <Magic style={{ fontSize: "20", fontWeight: "bold", color: "white" }} />
                </a>
            </Card.Header>
            <Card.Body>
                <p>
                    My name is Riona John. I am a technology intern at Avanade.
                    I am part of of the Emerging Tech team.
                </p>
                
                <p>
                    For my project I am using the Luxonis camera
                    and React/React-Boostrap technologies.
                </p>
                <p>

                </p>
            </Card.Body>
        </Card>
    )
}
export default DirectToTips