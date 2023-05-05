import './HomePage.css';
import homePageImage from './img/homePageImage.png'
import Typical from 'react-typical'
import { motion } from 'framer-motion'

function HomePage() {
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
                        <Typical
                            steps={['O MELHOR PREÇO!', 3000, 'A MAIOR VARIEDADE!', 3000]}
                            loop={Infinity}
                            wrapper="b"
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default HomePage;
