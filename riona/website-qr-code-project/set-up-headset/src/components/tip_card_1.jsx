import React from 'react';

import '../css_componets/card_css.css';

import { Card, Container } from 'react-bootstrap';

const TipCard1 = () => {
    return (
        <Card>
            {/*text colour rewrites react-boostrap - orginally white*/}
            <Card.Header style={{ textAlign: "center", fontWeight: "bold" }}>
                Tip: 
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
export default TipCard1