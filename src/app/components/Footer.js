import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import { Container, Col } from "react-bootstrap";

const Footer = () => {
    return (
        <div style={{ background: '#561A68' }}>
            <footer>
                <Container>
                    <Col>
                        <h3>Social Media</h3>
                        <a className='social-icons' href='https://www.instagram.com/nova_notary1/'><FontAwesomeIcon icon={faInstagram} /></a>      
                    </Col>
                </Container>
            </footer>
        </div>
    );
}

export default Footer; 