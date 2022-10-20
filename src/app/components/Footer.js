import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import { Container, Col } from "react-bootstrap";

const Footer = () => {
    return (
        <div>
            <footer>
                <Container>
                    <Col>
                        <ul>
                            <li><FontAwesomeIcon icon={faInstagram} /></li>
                        </ul>                
                    </Col>
                </Container>
            </footer>
        </div>
    );
}

export default Footer; 