import React, { FC } from 'react';
//Bootstrap
import { Container, Image, Row, Col, Button, Badge } from 'react-bootstrap';
//Icons
import { TbExternalLink } from "react-icons/tb";
import { FaGithub, FaHashtag } from "react-icons/fa";
import { PiDesktopTower, PiDeviceMobile } from "react-icons/pi";
//Spring
import { useSpring, animated } from '@react-spring/web';

interface PortfolioItemProps {
    theme: string;
    index: number;
    portfolioItem: any;
    filters: string[];
    handleAddFilter: (filter: string) => void;
}

const PortfolioItem: FC<PortfolioItemProps> = ({ theme, index, portfolioItem, filters, handleAddFilter }) => {
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

    const slideRightAnim = useSpring ({
        from: { opacity: 0, x: -200 },
        to: { opacity: 1, x: 0 },
        config: {tension: 120, friction: 15 },
    });

    const slideLeftAnim = useSpring ({
        from: { opacity: 0, x: 200 },
        to: { opacity: 1, x: 0 },
        config: {tension: 120, friction: 15 },
    });
    
    return (
        <Container as={Col} lg={6} xs={12} key={index} className='px-lg-4 px-0 py-2'>                
            <animated.div style={index % 2 === 0 ? slideRightAnim : slideLeftAnim}>
                <Row className={`cs-bg-item-${theme} cs-shadow-item-${theme} cs-transition m-0 rounded rounded-3 overflow-hidden pe-2`}>
                    <Col xs={4} className='px-0 position-relative'>
                        <Container className='position-absolute d-flex flex-row justify-content-start gap-2 h-25 w-50 mt-2'>
                            {portfolioItem.version.map((ver, index) => (
                                <Badge key={index} bg="custom" className={`cs-badge-${theme} px-1 py-1 cs-transition`}>
                                    {handleBadgeVerIcon(ver)}
                                </Badge>
                            ))}
                        </Container>
                        <Image fluid src={`https://raw.githubusercontent.com/MrSeager/mr-seager-portfolio/refs/heads/${portfolioItem.image}`} alt='image' className='cs-img cs-transition' />
                    </Col>
                    <Col xs={7} className='d-flex flex-column justify-content-between py-2'>
                        <h1 className={`cs-fc-${theme}-second h5 m-0`}>{portfolioItem.id}. {portfolioItem.title}</h1>
                        <Container className='p-0 d-flex flex-row flex-wrap gap-2'>
                            {portfolioItem.technology != null ? (
                                portfolioItem.technology.map((tech, index) => (
                                    <Button disabled={filters.includes(tech)} onClick={() => handleAddFilter(tech)} className={`cs-transition border-0 d-flex flex-row justify-content-center py-0 ps-0 cs-btn-filter-${theme}`}>
                                        <Badge className='cs-transition cs-badge me-2 p-2 h-100'><FaHashtag className='h-100' /></Badge>
                                        <p className='fw-bold m-0 py-1'>{tech}</p>
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
            </animated.div>
        </Container>
    );
};

export default PortfolioItem;