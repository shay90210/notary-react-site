import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import { Container, Col } from "react-bootstrap";

const Footer = () => {
    return (
        <div style={{ background: '#272343' }}>
            <footer>
                <Container>
                    <Col>
                        <h3>Social Media</h3>
                        <ul>
                            <li className='social-icons'><FontAwesomeIcon icon={faInstagram} /></li>
                        </ul>                
                    </Col>
                </Container>
            </footer>
        </div>
    );
}

export default Footer; 