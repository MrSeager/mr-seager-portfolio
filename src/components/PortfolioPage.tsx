import React, { FC, useState } from 'react';
//Bootsrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Nav, Navbar, NavbarCollapse, NavDropdown } from 'react-bootstrap';
//Axios
import axios from 'axios';
//Spring
import { useSpring, animated } from '@react-spring/web';

const PortfolioPage: FC = () => {
    const [theme, setTheme] = useState('dark');

    const colors = {
        dark: [
            '#262626',
            '#4D4D4D',
            '#737373'
        ],
        light: [
            '#F2F2F2',
            '#D9D9D9',
            '#A6A6A6'
        ],
        blue: [
            '#011126',
            '#011C40',
            '#032859'
        ]
    };

    const props = useSpring({ 
        from: { 
            backgroundColor: colors[theme][0] 
        }, 
        to: async (next) => { 
            while (1) { 
                await next({ 
                    backgroundColor: colors[theme][1] 
                }); 
                await next({ 
                    backgroundColor: colors[theme][2]  
                }); 
            } 
        },
        config: { duration: 3000, tension: 100, friction: 20 }
    });

    return (
        <Container fluid className='min-vh-100 overflow-hidden p-0'>
            <animated.div style={{ ...props, width: '100%', height: '10vh' }} />
            <Navbar expand='lg' fixed='top' className='px-5 py-3 bg-transparent'>
                <Navbar.Brand href='#home' className='text-light'>Mr. Seager's Portfolio</Navbar.Brand>
                <Navbar.Toggle />
                <NavbarCollapse >
                    <Nav className="ms-auto">
                        <NavDropdown title="Themes" drop='down'>
                            <NavDropdown.Item onClick={() => setTheme('dark')}>Dark</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => setTheme('light')}>Light</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => setTheme('blue')}>Blue</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className='cs-link text-light'>Contact</Nav.Link>
                    </Nav>
                </NavbarCollapse>
            </Navbar>
            <Container>
                
            </Container>
        </Container>
    );
}

export default PortfolioPage;
