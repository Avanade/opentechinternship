import React from 'react';

import '../css_componets/card_css.css';

import { Card, Container } from 'react-bootstrap';
import { Magic } from 'react-bootstrap-icons';

const TipCard1 = () => {
    return (
        <Card>
            {/*text colour rewrites react-boostrap - orginally white*/}
            <Card.Header style={{ textAlign: "center", fontWeight: "bold" }}>
                <Magic style={{ fontSize: "20", fontWeight: "bold" }} /> Personal Prefference
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    <Container>
                        
                    </Container>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
export default TipCard1