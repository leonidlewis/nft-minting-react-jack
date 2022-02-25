import './App.css';
import logo from './assets/images/logo.png'
import left from './assets/images/unknown.png'
import right from './assets/images/fetish.png'
// import nft from './assets/images/nftlogo.png'
function App() {
    return (
        <div className="App">
            <div className="header">
                <img src={logo} alt="logo" className="logo" />
            </div>
            <div className="main-content">
                <div className="image-container">
                    <img src={left} alt="left" className="nft-style" />
                </div>
                <div className="center-content">
                    <p className="content-header">x/7777 NFTits</p>
                    <p className="contract-address">Smart Contract</p>
                    <p className="content-description">0.07ETH per NFTits</p>
                    <p className="content-description-small">excluding gas fees</p>
                    <button className="connect-button">Connect Wallet</button>
                </div>
                <div className="image-container">
                    <img src={right} alt="right" className="nft-style" />
                </div>
            </div>
            <div className="footer">
                <p>
                Please make sure you are connected to the right network (Ethereum Mainnet) and the correct address. 
                Please note: Once you make the purchase, you cannot undo this action.
                </p>
                <p>
                We have set the gas limit to 280000 for the contract to successfully mint your NFT. We recommend that you don't lower the gas limit.
                </p>
            </div>
        </div>
    );
}

export default App;
