import React, { FC, useState, useEffect, useRef } from 'react';
//Components
import './PortfolioStyle.css';
import './DarkTheme.css';
//Bootsrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Nav, Navbar, NavbarCollapse, NavDropdown, Image, Row, Col, Button, Badge } from 'react-bootstrap';
//Axios
import axios from 'axios';
//Spring
import { useSpring, animated } from '@react-spring/web';
//Icons
import { TbExternalLink } from "react-icons/tb";
import { FaGithub, FaHashtag, FaLinkedin, FaDeviantart, FaYoutube } from "react-icons/fa";
import { PiDesktopTower, PiDeviceMobile } from "react-icons/pi";

interface PortfolioItemType {
    id: number;
    title: string;
    image: string;
    technology: string[];
    version: string[];
    repasitory: string;
    link: string;
}

const PortfolioPage: FC = () => {
    const [theme, setTheme] = useState('dark');
    const [filters, setFilters] = useState('');
    const [portfolio, setPortfolio] = useState<PortfolioItemType[]>([]);

    useEffect(() => {
        axios.get('https://raw.githubusercontent.com/MrSeager/mr-seager-portfolio/refs/heads/main/src/data.json').then((response) => {
          setPortfolio(response.data.portfolio);
        });
    }, []);

    const handleBadgeVerIcon = (ver) => {
        switch (ver) {
            case "desktop":
                return <PiDesktopTower className='h-100 w-100' />;
            case "mobile":
                return <PiDeviceMobile className='h-100 w-100' />;
            default:
                return null;
        }
    };

    return (
        <Container fluid className={`cs-bg-main-${theme} min-vh-100 overflow-hidden px-0 pt-5 pb-0`}>           
            <Navbar expand='lg' fixed='top' className={`cs-bg-${theme} px-5 py-3 shadow`}>
                <Navbar.Brand href='#home' className={`fw-bold cs-fc-${theme}`}>Mr. Seager's Portfolio</Navbar.Brand>
                <Container>
                    
                </Container>
                <Navbar.Toggle />
                <NavbarCollapse>
                    <Nav className="ms-auto">
                        <NavDropdown title="Themes" drop='down' className={`cs-nav-link-${theme}`}>
                            <NavDropdown.Item onClick={() => setTheme('dark')}>Dark</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => setTheme('light')}>Light</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => setTheme('blue')}>Blue</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className={`cs-link-${theme}`}>Contact</Nav.Link>
                    </Nav>
                </NavbarCollapse>
            </Navbar>
            <Container as={Row} fluid className='mt-5 px-5'>
                {portfolio.map((portfolioItem, index) => (
                    <Container as={Col} lg={6} xs={12} key={index} className='px-4 py-2'>                
                        <Row className={`cs-bg-main-dark${theme} m-0 rounded rounded-3 overflow-hidden shadow pe-2`}>
                            <Col xs={4} className='px-0 position-relative'>
                                <Container className='position-absolute d-flex flex-row justify-content-start gap-2 h-25 w-50 mt-2'>
                                    {portfolioItem.technology != null ? 
                                        (
                                            portfolioItem.version.map((ver, index) => (
                                            <Badge bg="custom" className={`cs-badge-${theme} px-1 py-1`}>
                                                {handleBadgeVerIcon(ver)}
                                            </Badge>
                                            ))
                                        ) : ''
                                    }
                                </Container>
                                <Image fluid src={`https://raw.githubusercontent.com/MrSeager/mr-seager-portfolio/refs/heads/${portfolioItem.image}`} alt='image' />
                            </Col>
                            <Col xs={7} className='d-flex flex-column justify-content-between py-2'>
                                <h1 className={`cs-fc-${theme}-second h5 m-0`}>{portfolioItem.id}. {portfolioItem.title}</h1>
                                <Container className='p-0 d-flex flex-row flex-wrap gap-2'>
                                    {portfolioItem.technology != null ? (
                                        portfolioItem.technology.map((tech, index) => (
                                            <Button className={`cs-transition border-0 d-flex flex-row justify-content-center py-0 ps-0 cs-btn-filter-${theme}`}>
                                                <Badge className='cs-transition cs-badge me-2 p-2 h-100'><FaHashtag className='h-100' /></Badge>
                                                <p className='fw-bold m-0 pb-1'>{tech}</p>
                                            </Button>
                                        ))
                                    ) : ''}
                                </Container>
                            </Col>
                            <Col xs={1} className='d-flex flex-column align-items-center justify-content-between py-2'>
                                <Button href={portfolioItem.link} target='_blank' className={`cs-btn-${theme} bg-transparent py-2 cs-transition`}><TbExternalLink /></Button>
                                <Button href={portfolioItem.repasitory} target='_blank' className={`cs-btn-${theme} bg-transparent py-2 cs-transition`}><FaGithub /></Button>
                            </Col>
                        </Row>
                    </Container>
                ))}
            </Container>
            <Container fluid className={`cs-bg-${theme} mt-3 p-5 shadow d-flex flex-lg-row flex-column`}>
                <Button className={`cs-transition m-2 cs-btn-${theme} cs-bg-main-${theme}`} href='https://www.linkedin.com/in/sergiy-b-623426159/' target='_blank'>
                    <FaLinkedin size="1.5em" /> Linkedin
                </Button>
                <Button className={`cs-transition m-2 cs-btn-${theme} cs-bg-main-${theme}`} href='https://github.com/MrSeager' target='_blank'>
                    <FaGithub size="1.5em" /> Github
                </Button>
                <Button className={`cs-transition m-2 cs-btn-${theme} cs-bg-main-${theme}`} href='https://www.deviantart.com/mrseager29' target='_blank'>
                    <FaDeviantart size="1.5em" /> Deviantart
                </Button>
                <Button className={`cs-transition m-2 cs-btn-${theme} cs-bg-main-${theme}`} href='https://www.youtube.com/channel/UCQgY4AFsqQWgxOvdeNGs-cQ' target='_blank'>
                    <FaYoutube size="1.5em" /> YouTube
                </Button>
            </Container>
        </Container>
    );
}

export default PortfolioPage;
