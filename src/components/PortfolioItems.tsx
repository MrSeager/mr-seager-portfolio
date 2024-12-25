import React, { FC } from 'react';
//Components
import PortfolioItem from './PortfolioItem.tsx';
//Bootstrap
import { Container, Row } from 'react-bootstrap';
//Spring
import { useSpring, animated } from '@react-spring/web';
//Intersection Observer
import { useInView } from 'react-intersection-observer';

interface PortfolioItemProps {
    id: number;
    title: string;
    image: string;
    technology: string[];
    version: string[];
    repasitory: string;
    link: string;
}

interface PortfolioItemsProps {
    theme: string;
    filters: string[];
    portfolio: PortfolioItemProps[]; 
    setFilters: (filters: string[]) => void;
}

const PortfolioItems: FC<PortfolioItemsProps> = ({ theme, filters, portfolio, setFilters }) => {
    const handleAddFilter = (filter: string) => {
        if (!filters.includes(filter)) {
            setFilters([...filters, filter]);
        }
    };

    const filteredList = portfolio.filter(item => {
        const portfolioFilters = item.technology;
        return filters.every(filter => portfolioFilters.includes(filter));
    });



    return (
        <Container as={Row} fluid className='mt-5 pt-lg-0 pt-5 px-5'>
            {filteredList.length > 0 ? ( 
                filteredList.map((portfolioItem, index) => (
                        <PortfolioItem 
                            theme={theme}
                            index={index}
                            portfolioItem={portfolioItem}
                            filters={filters}
                            handleAddFilter={handleAddFilter}
                        />
                ))) : <p className='text-center'>Loading...</p>
            }
        </Container>
    );
};

export default PortfolioItems;