import React, { FC, useState, useEffect } from 'react';
//Components
import './PortfolioStyle.css';
import './DarkTheme.css';
import './LightTheme.css';
import PortfolioNav from './PortfolioNav.tsx';
import PortfolioItems from './PortfolioItems.tsx';
import PortfolioFooter from './PortfolioFooter.tsx';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';
//Axios
import axios from 'axios';
//Spring
import { useSpring, animated, useTrail } from '@react-spring/web';

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
    const [theme, setTheme] = useState<string>('dark');
    const [filters, setFilters] = useState<string[]>([]);
    const [portfolio, setPortfolio] = useState<PortfolioItemType[]>([]);

    useEffect(() => {
        axios.get('https://raw.githubusercontent.com/MrSeager/mr-seager-portfolio/refs/heads/main/src/data.json').then((response) => {
          setPortfolio(response.data.portfolio);
        });
    }, []);

    return (
        <Container fluid className={`cs-bg-main-${theme} min-vh-100 overflow-hidden px-0 pt-5 pb-0`}>           
            <PortfolioNav 
                theme={theme}
                filters={filters}
                setFilters={setFilters}
                setTheme={setTheme}
            />
            
            <PortfolioItems 
                theme={theme}
                filters={filters}
                portfolio={portfolio}
                setFilters={setFilters}
            />

            <PortfolioFooter 
                theme={theme}
            />
        </Container>
    );
}

export default PortfolioPage;