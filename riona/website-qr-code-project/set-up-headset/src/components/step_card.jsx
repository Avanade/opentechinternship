import React from 'react';

import { Card } from 'react-bootstrap';

const StepCard = () => {
    return (
    <Card style={{ color: "#000" }}>
            {/*text colour rewrites react-boostrap - orginally white*/}
            <Card.Header>Step 1</Card.Header>
            <Card.Body>
                <Card.Title>Turn the HoloLens on.</Card.Title>
                <Card.Text>
                    Step 1 is words, more words.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
export default StepCard