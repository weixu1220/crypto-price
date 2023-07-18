import { useState, useEffect } from "react";
import{useParams} from 'react-router-dom';

function Price() {

    const [coin,setCoin] = useState({})
    const params = useParams();

    async function getCoin (){
        
        const apiKey = import.meta.env.VITE_API_KEY;
        const api =`http://rest.coinapi.io/v1/exchangerate/${params.symbol}/USD?apikey=${apiKey}`
        const response = await fetch(api);
        const data = await response.json();
        setCoin(data)

    }

    useEffect(()=>{
        // getCoin()
    },[])

    function loaded (){
        return ( 
            <div className="loaded">
                <h1>{coin.asset_id_base}/{coin.asset_id_quote}</h1>
                <h1>{coin.rate}</h1>
            </div>
             );
    }
    function loading (){
        return ( 
            <div className="loading">
                <h1>Loading...</h1>
            </div>
             );
    }

    return coin.rate ? loaded() : loading();
}
export default Price;