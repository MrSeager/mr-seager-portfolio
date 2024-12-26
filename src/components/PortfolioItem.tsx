import React, { FC, useState } from 'react';
//Bootstrap
import { Container, Image, Row, Col, Button, Badge } from 'react-bootstrap';
//Icons
import { TbExternalLink } from "react-icons/tb";
import { FaGithub, FaHashtag } from "react-icons/fa";
import { PiDesktopTower, PiDeviceMobile } from "react-icons/pi";
//Spring
import { useSpring, animated } from '@react-spring/web';
//Intersection Observer
import { useInView } from 'react-intersection-observer';
//Components
import useSlideAnimation from './useSlideAnimation.tsx';

interface PortfolioItemProps {
    theme: string;
    index: number;
    portfolioItem: any;
    filters: string[];
    handleAddFilter: (filter: string) => void;
}

const PortfolioItem: FC<PortfolioItemProps> = ({ theme, index, portfolioItem, filters, handleAddFilter }) => {
    const [isHovered, setHovered] = useState(false);
    
    const handleBadgeVerIcon = (ver: any) => {
        switch (ver) {
            case "desktop":
                return <PiDesktopTower className='h-100 w-100' />;
            case "mobile":
                return <PiDeviceMobile className='h-100 w-100' />;
            default:
                return null;
        }
    };
    
    const { ref, inView } = useInView({ 
        triggerOnce: false, 
        threshold: 0.1, 
    });
    
    const slideAnimation = useSlideAnimation(index % 2 === 0 ? 'right' : 'left', inView, isHovered);

    return (
        <Container as={Col} lg={6} xs={12} key={index} className='px-lg-4 px-0 py-2'>                
            <animated.div 
                key={index} 
                ref={ref} 
                style={slideAnimation}
                onMouseEnter={() => setHovered(true)} 
                onMouseLeave={() => setHovered(false)}
                className='p-0'>
                <Row className={`cs-bg-item-${theme} cs-shadow-item-${theme} cs-transition m-0 rounded rounded-3 overflow-hidden pe-lg-2 pe-0 h-100`}>
                    <Col md={4} xs={12} className='px-0 position-relative overflow-hidden d-flex flex-column'>
                        <Container className='position-absolute d-flex flex-row justify-content-start gap-2 h-25 w-100 mt-2'>
                            {portfolioItem.version.map((ver, index) => (
                                <Badge key={index} bg="custom" className={`cs-badge-${theme} px-1 py-1 cs-transition`}>
                                    {handleBadgeVerIcon(ver)}
                                </Badge>
                            ))}
                        </Container>
                        <Image src={`https://raw.githubusercontent.com/MrSeager/mr-seager-portfolio/refs/heads/${portfolioItem.image}`} alt='image' className='cs-img cs-transition h-100' />
                    </Col>
                    <Col md={7} xs={12} className='d-flex flex-column justify-content-between py-2 gap-2'>
                        <h1 className={`cs-fc-${theme}-second h5 m-0`}>{portfolioItem.id}. {portfolioItem.title}</h1>
                        <Container className='p-0 d-flex flex-row flex-wrap justify-content-md-start justify-content-center gap-2'>
                            {portfolioItem.technology != null ? (
                                portfolioItem.technology.map((tech, index) => (
                                    <Button key={index} disabled={filters.includes(tech)} onClick={() => handleAddFilter(tech)} className={`cs-transition border-0 d-flex flex-row justify-content-center py-0 ps-0 cs-btn-filter-${theme}`}>
                                        <Badge className='cs-transition cs-badge me-2 p-2 h-100'><FaHashtag className='h-100' /></Badge>
                                        <p className='fw-bold m-0 py-1'>{tech}</p>
                                    </Button>
                                ))
                            ) : ''}
                        </Container>
                    </Col>
                    <Col md={1} xs={12} className='d-flex flex-md-column flex-row align-items-center justify-content-between py-2'>
                        <Button href={portfolioItem.link} target='_blank' className={`cs-btn-${theme} bg-transparent py-2 cs-transition`}><TbExternalLink /></Button>
                        <Button href={portfolioItem.repasitory} target='_blank' className={`cs-btn-${theme} bg-transparent py-2 cs-transition`}><FaGithub /></Button>
                    </Col>
                </Row>
            </animated.div>
        </Container>
    );
};

export default PortfolioItem;