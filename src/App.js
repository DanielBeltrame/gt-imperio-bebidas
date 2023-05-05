import './App.css';
import Menu from './components/menu/Menu'
import HomePage from './components/homePage/HomePage'
import InformationContainer from './components/informationContainer/InformationContainer'
import LocationPage from './components/location/LocationPage'
import About from './components/about/About'
import logo from './logo.png'

function App() {
  return (
    <div className="app">
      <img className='logo' src={logo} />
      <Menu />
      <HomePage />
      <InformationContainer />
      <About />
      <LocationPage />
    </div>
  );
}

export default App;
