import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";

import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    return (
        <div style={{ background: '#561A68' }}>
            <footer>
                <Container>
                    <Row>
                        <Col>
                            <h3>Connect with Us on Social Media</h3>
                            <a className='social-icons' href='https://www.instagram.com/nova_notary1/'><FontAwesomeIcon icon={faInstagram} /></a>      
                            <a className='social-icons' href='https://www.tiktok.com/@novanotarydfw'><FontAwesomeIcon icon={faTiktok} /></a>      
                        </Col>
                    </Row>
                        <br />
                        <hr style={{color: 'white'}}/>
                    <Row>
                        <Col>
                            <p style={{color: 'white'}}
                            >&copy; 2022, Nova Notary Powered by The Glam Techie</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    );
}

export default Footer; 