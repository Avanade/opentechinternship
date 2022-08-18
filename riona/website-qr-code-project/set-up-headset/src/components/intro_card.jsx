import React from 'react';

import { Card } from 'react-bootstrap';

const IntroCard = () => {
    return (
        <Card bg='light' style={{ color: "#000" }}>
            {/*text colour rewrites react-boostrap - orginally white*/}
            <Card.Header>Make sure you have the following:</Card.Header>
            <Card.Body>
                <Card.Text>
                    <li>A network connection</li>
                    <li>A Microsoft account</li>
                    <li>A safe space with no tripping hazzards</li>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
export default IntroCard