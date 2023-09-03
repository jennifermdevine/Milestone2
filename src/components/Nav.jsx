import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import In from './In';
import { Route, Routes } from 'react-router-dom'

function Nav() {
    return (
      <div className="header">
        <Navbar>
          <Container>
            <Navbar>In-Or-Out?</Navbar>
          </Container>
        </Navbar>
      </div>
    );
  }
  
  export default Nav;