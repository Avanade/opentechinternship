import React from 'react';

import '../css_componets/card_css.css';

import { Card } from 'react-bootstrap';

const CameraCard = () => {
    return (
        <Card>
            {/*text colour rewrites react-boostrap - orginally white*/}
            <Card.Header style={{ textAlign: "center", fontWeight: "bold" }}>
                Luxonis Camera using DepthAi Libaries on Github
            </Card.Header>
            <Card.Body>
                <p>
                    I finished my website and converted my website into a qr code first.
                </p>
                <p>
                    Then I worked with the code provided on git hub from: "git hub repo link to qr detect"
                </p>
                <p>
                    My biggest issue was ...
                </p>
                <p>
                    I also now have to find a way how the website can be deployed from
                    any device since currently it is stored on my local machine.
                </p>
            </Card.Body>
        </Card>
    )
}
export default CameraCard