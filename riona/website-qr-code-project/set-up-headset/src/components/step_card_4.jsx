import React from 'react';

import '../css_componets/card_css.css';

import { Card } from 'react-bootstrap';

const StepCard4 = () => {
    return (
        <Card>
            {/*text colour rewrites react-boostrap - orginally white*/}
            <Card.Header style={{ textAlign: "center", fontWeight: "bold" }}>
                "Important" Step 4: Calibrating the HoloLens to your eyes
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    <p>
                        The first step is to adjust your visor.
                        (Make sure the visor is pushed fully down and in,
                        so you can see all four corners.)
                    </p>
                    <p>
                        To calibrate, your eyes will be looking at different targets (gems).
                    </p>
                    <p>
                        It's fine if you blink or close your eyes during calibration,
                        but try not to stare at other objects in the room or physical space.
                    </p>
                    <p>
                        HoloLens 
                    </p>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
export default StepCard4