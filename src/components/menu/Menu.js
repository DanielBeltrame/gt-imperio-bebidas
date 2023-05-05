import './Menu.css';
import instaIcon from './img/icons-instagram.png'
import wttIcon from './img/icons-whatsapp.png'
import { motion } from 'framer-motion'
import { RiMenu3Fill } from 'react-icons/ri'
import MenuMobile from './menuMobile/MenuMobile';
import { useState, useEffect } from 'react';

function Menu() {
    const [menuIsVisible, setMenuIsVisible] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth)

    useEffect(() => {
        console.log(window.innerWidth)
        if (window.innerWidth <= 990) {
            setIsMobile(true)
        } else { setIsMobile(false) }
    }, [])

    return (
        <div className='menuContainer'>
            {!isMobile ? (
                <>
                    <motion.ul className='menuLeft'
                        animate={{ x: -20 }}
                        transition={{ duration: 1.0 }}>
                        <li><a href="#home">INÍCIO</a></li>
                        <li><a href="#delivery">TELE ENTREGA</a></li>
                        <li><a href="#variety">VARIEDADES</a></li>
                        <li><a href="#location">LOCALIZAÇÃO</a></li>
                    </motion.ul>
                    <motion.ul className='menuRight'
                        animate={{ x: 30 }}
                        transition={{ duration: 1.0 }}>
                        <li><a href="https://wa.me/+5549984260143" target="_blank"><img src={wttIcon} /></a></li>
                        <li><a href="https://www.instagram.com/gt_imperio_bebidas_/?igshid=ZDdkNTZiNTM%3D" target="_blank"><img src={instaIcon} /></a></li>
                    </motion.ul>

                </>) : (
                <RiMenu3Fill
                    onClick={() => setMenuIsVisible(true)}
                    size={40}
                    className='mobile'
                />)}

            <MenuMobile
                menuIsVisible={menuIsVisible}
                setMenuIsVisible={setMenuIsVisible}
            />
        </div>
    );
}

export default Menu;
