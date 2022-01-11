import { useState, useEffect } from 'react'
import axios from 'axios'


function GetQR() {
    const [base64, setBase64] = useState('');

    useEffect(() => {
        axios.get('api/QR')
            .then(finalResult => {
                setBase64(finalResult.data);
                console.log(base64);  
            });
}, []);

    return <img src={`${base64}`} />

}





export default GetQR;

