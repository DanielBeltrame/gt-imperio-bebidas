import './About.css';
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import image1 from './img/image1.jpg'
import image2 from './img/image2.jpg'
import image3 from './img/image3.jpg'
import image4 from './img/image4.jpg'
import image5 from './img/image5.jpg'
import image6 from './img/image6.jpg'
import image7 from './img/image7.jpg'
import image8 from './img/image8.jpg'
import image9 from './img/image9.jpg'
import image10 from './img/image10.jpg'
import image11 from './img/image11.jpg'
import image12 from './img/image12.jpg'

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12]

function About() {
    const carousel = useRef()
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }, [])

    return (
        <>
            <motion.div
                className='text'
                id="variety"
            >
                <h1>VARIEDADES:</h1>
                <p>NO GT IMPÉRIO BEBIDAS VOCÊ ENCONTRA UMA GRANDE VARIEDADE DE BEBIDAS, <br />
                    ESSÊNCIA E CARVÃO PARA NARGUILE E SE PREFERIR PODE DESFRUTAR DE UMA SESSÃO NO LOCAL</p>
                <b>NÃO PERCA NOSSA OFERTA DE CHOPP HARDEN! VENHA CONFERIR.</b>
            </motion.div>
            <div className='aboutContainer'>
                <motion.div ref={carousel} className='carousel' whileTap={{ cursor: 'grabbing' }}>
                    <motion.div
                        className='inner'
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                        initial={{ x: 100 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 1.0 }}
                    >
                        {images.map(image => (
                            <motion.div className='item' key={image}>
                                <img src={image} />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </>
    );
}

export default About;
