import './MenuMobile.css';
import { IoClose } from 'react-icons/io5'
import instaIcon from '../img/icons-instagram.png'
import wttIcon from '../img/icons-whatsapp.png'

function MenuMobile({ menuIsVisible, setMenuIsVisible }) {
    return (
        <>
            {menuIsVisible && (
                <div className='menuMobileContainer'>
                    <IoClose size={45} onClick={() => setMenuIsVisible(false)} />
                    <ul className='menuContent'>
                        <li><a href="#home">INÍCIO</a></li>
                        <li><a href="#delivery">TELE ENTREGA</a></li>
                        <li><a href="#variety">VARIEDADES</a></li>
                        <li><a href="#location">LOCALIZAÇÃO</a></li>
                        <li>(49) 98426-0143</li>
                        <div className='subMenuContent'>
                            <li><a href="https://wa.me/+5549984260143" target="_blank"><img src={wttIcon} /></a></li>
                            <li><a href="https://www.instagram.com/gt_imperio_bebidas_/?igshid=ZDdkNTZiNTM%3D"><img src={instaIcon} /></a></li>
                        </div>

                    </ul>
                </div >)
            }
        </>

    );
}

export default MenuMobile;
