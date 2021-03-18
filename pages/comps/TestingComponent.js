import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic'
 
const TestingComponent = () => {
    const [BarCodeScanner, setBarCodeScanner] = useState(null);
    useEffect(()=>{
        const scanner = dynamic(() => import('barcode-react-scanner'),{ssr:false});
        console.log(scanner);
        setBarCodeScanner(scanner)
    },[])
    const [code, setCode] = useState('');
    console.log("hello world")
        return (
            <>
            { code && <p> code </p> }
            {BarCodeScanner?<BarCodeScanner onUpdate={ (err, resp) => {
                if(resp) {
                    setCode(resp.getText())
                }
            }}
            />:null}
            <div id = "scanner-container">
                <video id="video" className="dbrScanner-video" playsInline={true}></video>
            </div>
        </>
    );
 
}
 
export default TestingComponent;