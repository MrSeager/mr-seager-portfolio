import { useSpring } from '@react-spring/web';

const useSlideAnimation = (direction: 'right' | 'left', inView: boolean, isHovered: boolean) => {
    const x = direction === 'right' ? -200 : 200;
    return useSpring({
        from: { opacity: 0, x, y: -50 },
        to: { 
            opacity: inView ? 1 : 0, 
            x: inView ? 0 : x, 
            y: inView ? 0 : -50,
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        },
        config: { tension: 120, friction: 35 },
    });
};

export default useSlideAnimation;
