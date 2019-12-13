import React, { useState } from 'react';
import QrReader from 'react-qr-reader';
import Popup from "reactjs-popup";
import { navigate } from '@reach/router';

const contentStyle = {
    width: '80%',
    height: '60%',
}

const QrCodeReader = () => {
    const [result, setResult] = useState('')

    const handleScan = data => {
        if(data){
            setResult(data)
            return navigate('profile')
        }
    }

    const handleError = err => {
        console.log(err)
    }

    return (
        <Popup 
            trigger={
                <button className="focus:outline-none">
                    <svg width="54" height="46" viewBox="0 0 54 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M49 7.5H40.5L38.475 1.825C38.3351 1.43668 38.0787 1.10101 37.7409 0.86386C37.4031 0.626709 37.0003 0.499636 36.5875 0.500001H17.4125C16.5687 0.500001 15.8125 1.03125 15.5312 1.825L13.5 7.5H5C2.2375 7.5 0 9.7375 0 12.5V41C0 43.7625 2.2375 46 5 46H49C51.7625 46 54 43.7625 54 41V12.5C54 9.7375 51.7625 7.5 49 7.5ZM49.5 41C49.5 41.275 49.275 41.5 49 41.5H5C4.725 41.5 4.5 41.275 4.5 41V12.5C4.5 12.225 4.725 12 5 12H16.6687L17.7375 9.0125L19.1687 5H34.825L36.2562 9.0125L37.325 12H49C49.275 12 49.5 12.225 49.5 12.5V41ZM27 16C21.475 16 17 20.475 17 26C17 31.525 21.475 36 27 36C32.525 36 37 31.525 37 26C37 20.475 32.525 16 27 16ZM27 32C23.6875 32 21 29.3125 21 26C21 22.6875 23.6875 20 27 20C30.3125 20 33 22.6875 33 26C33 29.3125 30.3125 32 27 32Z" fill="black"/>
                    </svg>
                </button>
            } 
            modal
            contentStyle={contentStyle}
            >
            {close => (
                <div>
                    <div className='flex justify-end mr-4'>
                    <button className="text-4xl focus:outline-none" onClick={close}>
                        &times;
                    </button>
                    </div>
                    <div className="flex justify-start pl-4 mt-4 mb-10">
                        <p className='text-lg'>Please place QR Code inside the red box</p>
                    </div>
                    <div className="flex justify-center mx-4">
                        <QrReader
                            // delay={100}
                            onError={handleError}
                            onScan={handleScan}
                            style={{ width: '100%' }}
                            className='my-4'
                            showViewFinder={true}
                        />  
                        <p className=''>{result}</p>          
                    </div>
                </div>
            )}
      </Popup>
    )

}

export default QrCodeReader;