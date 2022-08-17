import React from 'react';

import { Card } from 'react-bootstrap';

const StepCard = () => {
    return (
    <><><Card bg='light' style={{ color: "#000" }}>
            {/*text colour rewrites react-boostrap - orginally white*/}
            <Card.Header>Make sure you have the following:</Card.Header>
            <Card.Body>
                <Card.Text>
                    <li>A network connection</li>
                    <li>A Microsoft account</li>
                    <li>A safe space with no tripping hazzards</li>
                </Card.Text>
            </Card.Body>
        </Card><Card style={{ color: "#000" }}>
                {/*text colour rewrites react-boostrap - orginally white*/}
                <Card.Header>Set Up Windows</Card.Header>
                <Card.Body>
                    <Card.Text>
                    <ol>Put it on your head and adjust accordingly.</ol>
                    <ol></ol> 
                    </Card.Text>
                </Card.Body>
            </Card></><Card style={{ color: "#000" }}>
                {/*text colour rewrites react-boostrap - orginally white*/}
                <Card.Header>Step 2</Card.Header>
                <Card.Body>
                    <Card.Title>Turn the HoloLens on.</Card.Title>
                    <Card.Text>
                        Step 1 is words, more words.
                    </Card.Text>
                </Card.Body>
            </Card></>
    )
}
export default StepCard