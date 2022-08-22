import React from 'react';

import '../css_componets/card_css.css';

import { Card } from 'react-bootstrap';

const HomePageCard = () => {
    return (
        <Card text="white" bg="secondary" border="dark">
            {/*text colour rewrites react-boostrap - orginally white*/}
            <Card.Body>
                <Card.Text>
                    <h2>Welcome to the HoloLens Gen2 Guide</h2>
                    <p>This website was created to enable new users to a VR headset 
                        to have a easy guide to set up and calibrate the headset 
                        in a interactive way</p>
                    <p>Please continue to explore the different webpages:</p>
                    <ul>
                        About Me - will tell you more about myself
                        and my intrests and my role in Avanade as an intern. 
                    </ul>
                    <ul>
                        Step-By-Step - will is a step by step guide on 
                        how to set up the Holo Lens for the first time 
                        and how to generally use it. 
                    </ul>
                    <ul>
                        Tips & Tricks - is my pocket of tips and tricks 
                        from myself using a HoloLens for the first time.
                    </ul>
                    <ul>
                        Find Out More - will talk about my project that I  
                        am developing at my time at Avanade.
                    </ul>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
export default HomePageCard