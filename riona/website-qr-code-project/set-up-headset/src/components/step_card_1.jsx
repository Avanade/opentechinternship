import React from 'react';

import { Card } from 'react-bootstrap';

const StepCard1 = () => {
    return (
        <Card style={{ color: "#000" }}>
            {/*text colour rewrites react-boostrap - orginally white*/}
            <Card.Header>Step 1: Set Up Windows</Card.Header>
            <Card.Body>
                <Card.Text>
                    <ol>Put it on your head and adjust accordingly.</ol>
                    <ol></ol>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
export default StepCard1