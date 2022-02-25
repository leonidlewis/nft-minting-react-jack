import './App.css';
import logo from './assets/images/logo.png'
import left from './assets/images/unknown.png'
import right from './assets/images/fetish.png'

function App() {
    return (
        <div className="App">
            <div className="header">
                <img src={logo} alt="logo" className="logo" />
            </div>
            <div className="main-content">
                <div className="image-container">
                    <img src={left} alt="left" className="logo" />
                </div>
                <div className="center-content">
                    <p className="content-header">x/7777 NFTits</p>
                    <p className="contract-address">Title</p>
                    <p className="content-description">Title</p>
                    <button className="connect-button">Connect Wallet</button>
                </div>
                <div className="image-container">
                    <img src={right} alt="right" className="logo" />
                </div>
            </div>
        </div>
    );
}

export default App;
