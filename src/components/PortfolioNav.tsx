import React, { FC } from 'react';
//Bootstrap
import { Nav, Navbar, NavbarCollapse, NavDropdown, Button } from 'react-bootstrap';
//Icons
import { FaHashtag } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

interface PortfolioNavProps {
    theme: string;
    filters: string[];
    setFilters: (filters: string[]) => void; 
    setTheme: (theme: string) => void;
    handleShow: () => void;
}

const PortfolioNav: FC<PortfolioNavProps> = ({ theme, filters, setFilters, setTheme, handleShow }) => {
    const handleRemoveFilter = (filter: string) => {
        setFilters(filters.filter(f => f !== filter));
    };

    return (
        <Navbar expand='lg' fixed='top' className={`cs-bg-${theme} cs-transition px-5 py-3 cs-shadow-${theme}`}>
            <Navbar.Brand href='#home' className={`fw-bold cs-fc-${theme}`}>Mr. Seager's Portfolio</Navbar.Brand>
            <Navbar.Toggle className={`cs-transition cs-toggle-${theme}`}>
                <IoMenu className='my-1' />
            </Navbar.Toggle>
            <Nav className='w-100 py-lg-0 py-3 d-flex flex-row flex-wrap align-items-center justify-content-center gap-3'>
                {filters.map((filter) => (
                    <Button key={filter} onClick={() => handleRemoveFilter(filter)} className={`cs-transition border-0 d-flex flex-row justify-content-center align-items-center py-0 cs-btn-filter-${theme}`}>
                        <FaHashtag className='me-1' />
                        <p className='fw-bold m-0 pb-1'>{filter}</p>
                    </Button>
                ))}
            </Nav>
            <NavbarCollapse>
                <Nav className="ms-auto">
                    <NavDropdown title="Themes" drop='down' className={`cs-nav-link-${theme}`}>
                        <NavDropdown.Item onClick={() => setTheme('dark')}>Dark</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => setTheme('light')}>Light</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link onClick={handleShow} className={`cs-link-${theme} cs-transition`}>Contact</Nav.Link>
                </Nav>
            </NavbarCollapse>
        </Navbar>
    );
};

export default PortfolioNav;