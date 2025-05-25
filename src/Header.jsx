import { useLocation } from "react-router-dom";
import { Navbar, Form, FormControl, Dropdown, Image } from "react-bootstrap";
import "./Header.scss";

const Header = ({ username }) => {
  const location = useLocation();
  const currentRoute = location.pathname.split("/")[1] || "Overview";

  return (
    <Navbar bg="light" className="justify-content-between px-4 py-2 header">
      <div className="d-flex align-items-center gap-3">
        <h5 className="mb-0 text-capitalize">{currentRoute}</h5>
        <Form inline="true">
          <FormControl type="text" placeholder="Search" />
        </Form>
      </div>

      <div className="d-flex align-items-center gap-3">
        <span className="text-muted">Hi, {username}</span>
        <i className="bi bi-bell"></i>
        <Dropdown align="end">
          <Dropdown.Toggle as="div" className="profile-dropdown">
            <Image src="https://via.placeholder.com/32" roundedCircle />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/settings">Profile Settings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/logout">Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </Navbar>
  );
};

export default Header;
