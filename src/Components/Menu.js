import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './../images/melody.svg'

export default function Menu({ setScreen }) {
  return (
    <>
      <Navbar className="navbar">
        <Container>
          <Nav className="me-auto">
            <Nav.Link onClick={() => setScreen("/playlists")}>Playlists</Nav.Link>
            <Nav.Link onClick={() => setScreen("/artists")}>Artists</Nav.Link>
            <Nav.Link onClick={() => setScreen("/albums")}>Albums</Nav.Link>
            <Nav.Link onClick={() => setScreen("/songs")}>Songs</Nav.Link>
          </Nav>
          <Navbar.Brand onClick={() => setScreen("/")} className="logo"><img src={Logo} alt="logo" /></Navbar.Brand>
          {/* <img src={Logo} alt="logo" /> */}
        </Container>
      </Navbar>
    </>
  );
}