import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic'

const About = () => {
  // return (
  //   <>
  //     <Head>
  //       <title>Ninja About</title>
  //       <meta name="keywords" content="ninjas" />
  //     </Head>
  //     <div>
  //       <h1>About</h1>
  //       <p>asdsadasdas</p>
  //       <p>asdasdsdsd</p>
  //       <TestingComponent />
  //     </div>
  //   </>
  // );
  const DynamicBarCodeScanner = dynamic(
    () => import('barcode-react-scanner'),
    {ssr:false}
  )
  
  // const [BarCodeScanner, setBarCodeScanner] = useState(null);
    const [code, setCode] = useState('');
    console.log("hello world")
        return (
            <>
            { code && <p> code </p> }
            <DynamicBarCodeScanner onUpdate={ (err, resp) => {
                if(resp) {
                    setCode(resp.getText())
                }
            }}
            />
            {/* <div id = "scanner-container">
                <video id="video" className="dbrScanner-video" playsInline={true}></video>
            </div> */}
        </>
    );
};

export default About;
