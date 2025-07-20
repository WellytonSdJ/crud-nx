import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useThemeStore } from '@store/themeStore'

const Header = () => {
  const { isDarkMode, toggleTheme } = useThemeStore()
  return (
    <Navbar
      style={{
        backgroundColor: isDarkMode ? '#007bff' : '#007bff', // azul forte claro/escuro
        color: '#fff'
      }}
      variant="dark"
      className="shadow-sm"
    >
      <Container className="d-flex justify-content-between">
        <Navbar.Brand as={NavLink} to="/">
          Meu App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" end>
              Início
            </Nav.Link>
            <Nav.Link as={NavLink} to="/dashboard">
              Dashboard
            </Nav.Link>
          </Nav>
          <Button variant={isDarkMode ? 'light' : 'dark'} onClick={toggleTheme}>
            {isDarkMode ? 'Modo Claro ☀️' : 'Modo Escuro 🌙'}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
