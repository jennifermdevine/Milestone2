import Nav from 'react-bootstrap/Nav';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

function Footer(){
return(
        <div>
        <div>
            <Nav className="justify-content-center">
                <Nav.Item>
                    <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltipMat">Mathew Puig</Tooltip>}><Nav.Link className="mathew" target="_blank" href="https://github.com/techG0LD"><i class="fa-brands fa-github"></i></Nav.Link></OverlayTrigger>
                </Nav.Item>
                <Nav.Item>
                    <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltipJen">Jennifer Devine</Tooltip>}><Nav.Link className="jennifer" target="_blank" href="https://github.com/jennifermdevine"><i class="fa-brands fa-github"></i></Nav.Link></OverlayTrigger>
                </Nav.Item>
                <h4 className="contact">Contact Us</h4>
                <Nav.Item>
                    <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltipEl">Elva Plazola</Tooltip>}><Nav.Link className="elva" target="_blank" href="https://github.com/elvaplazola"><i class="fa-brands fa-github"></i></Nav.Link></OverlayTrigger>
                </Nav.Item>
                <Nav.Item>
                    <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltipZ">Zoren Gabriel Villareal</Tooltip>}><Nav.Link className="zoren" target="_blank" href="https://github.com/zmoove27"><i class="fa-brands fa-github"></i></Nav.Link></OverlayTrigger>
                </Nav.Item>
            </Nav>
        </div>
        </div>
    );
}

export default Footer;