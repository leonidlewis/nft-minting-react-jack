import './App.css';
import logo from './assets/images/logo.png'
import left from './assets/images/unknown.png'
import right from './assets/images/fetish.png'
import nft from './assets/images/nftlogo.png'
function App() {
    return (
        <div className="App">
            <div className="header">
                <img src={logo} alt="logo" className="logo" />
            </div>
            <div className="main-content">
                <div className="image-container">
                    <img src={nft} alt="left" className="nft-style" />
                </div>
                <div className="center-content">
                    <p className="content-header">x/7777 NFTits</p>
                    <p className="contract-address">Title</p>
                    <p className="content-description">Title</p>
                    <button className="connect-button">Connect Wallet</button>
                </div>
                <div className="image-container">
                    <img src={nft} alt="right" className="nft-style" />
                </div>
            </div>
        </div>
    );
}

export default App;
