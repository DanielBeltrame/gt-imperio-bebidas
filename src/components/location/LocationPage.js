import './LocationPage.css';
import locationImg from './img/pino-de-localizacao.png'

function LocationPage() {
    return (
        <div id="location" className='containerLocation'>
            <div className='textLocationContainer'>
                <h1>LOCALIZAÇÃO</h1>
                <img src={locationImg} />
            </div>
            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5972.209621000035!2d-52.60327452690753!3d-27.121751854496758!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e4b1a4dadd9aa3%3A0x5ab7ff12012aece6!2sTele%20Beer%20GT%20Imp%C3%A9rio%20Bebidas%20%7C%20chapeco!5e0!3m2!1spt-BR!2sbr!4v1683165986464!5m2!1spt-BR!2sbr"
            >
            </iframe>
        </div>
    );
}

export default LocationPage;
