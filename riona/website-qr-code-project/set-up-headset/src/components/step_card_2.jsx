import React from 'react';

import '../css_componets/card_css.css';

import { Card, Container } from 'react-bootstrap';

const StepCard2 = () => {
    return (
        <Card text="white" bg="secondary" border="dark">
            {/*text colour rewrites react-boostrap - orginally white*/}
            <Card.Header>Step 2: Set Up Windows</Card.Header>
            <Card.Body>
                <Card.Text>
                    Below is the following animations you will start to see when you turn the Holo Lens on for the first time.
                    <p>A windows square button will appear click on it, to start.</p>
                    <Container>
                        "insert tip"
                    </Container>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
export default StepCard2