import './InformationContainer.css';
import wttIcon from '../menu/img/icons-whatsapp.png'

function InformationContainer() {
    return (
        <div id="delivery" className='informationContainer'>
            <div className='deliveryContainer'>
                <h1>TELE ENTREGA:</h1>
                <div>
                    <img src={wttIcon} />
                    <a>(49) 98426-0143</a>
                </div>
                <button className='whatsapp-btn'>
                    <a href="https://wa.me/+5549984260143" target="_blank" class="whatsapp-btn">CHAME NO WHATSAPP</a>
                </button>
            </div>
            <div className='serviceContainer'>
                <h1>HORARIO DE ATENDIMENTO:</h1>
                <div>
                    <a>Segunda................................18:00 até 2:00</a>
                    <a>Terça................................18:00 até 2:00</a>
                    <a>Quarta................................18:00 até 2:00</a>
                    <a>Quinta................................18:00 até 2:00</a>
                    <a>Sexta................................18:00 até 2:00</a>
                    <a>Sabádo................................18:00 até 2:00</a>
                    <a>Domingo................................18:00 até 2:00</a>
                </div>
            </div>
        </div>
    );
}

export default InformationContainer;
