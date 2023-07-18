import { Link } from "react-router-dom";
function Currencies(props) {
    const currencies = [
        { name: "Bitcoin", symbol: "BTC" },
        { name: "Litecoin", symbol: "LTC" },
        { name: "Ethereum", symbol: "ETH" },
        { name: "Ethereum Classic", symbol: "ETC" },
        { name: "Stellar Lumens", symbol: "XLM" },
        { name: "Dash", symbol: "DASH" },
        { name: "Ripple", symbol: "XRP" },
        { name: "Zcash", symbol: "ZEC" },
    ];
    
    return ( 
    <div className="currencies">
        {currencies.map((coin,index)=>{
            return(
                <Link key={index} to={`/price/${coin.symbol}`}>
                    <h2>{coin.name}</h2>
                </Link>
            )
        })}
        <h1>Currencies page</h1>
    </div> );
}

export default Currencies;