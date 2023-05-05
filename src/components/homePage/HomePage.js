import './HomePage.css';
import homePageImage from './img/homePageImage.png'
import Typed from 'typed.js';
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react';

function HomePage() {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['O MELHOR PREÇO!', 'A MAIOR VARIEDADE!'],
            typeSpeed: 50,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);

    return (
        <div id="home" className='homeContainer'>
            <div className='imgContainerHome'>
                <img src={homePageImage} />
                <div className='overlay'></div>
                <motion.div className='textContainer'
                    animate={{ x: -570 }}
                    transition={{ duration: 1.0 }}>
                    <b>GT IMPÉRIO BEBIDAS, </b>
                    <div>
                        <b ref={el} />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default HomePage;
