import React, { useState } from 'react';
import { navigate } from '@reach/router';
import QRCode from 'qrcode.react';
import { useQuery } from '@apollo/react-hooks';
import { NAVBAR_PROFILE } from '../queries/index';

const imageSettings = {
    width: 90,
    height: 50,
}

const ReadQr = () => {
    const { loading, error, data } = useQuery(NAVBAR_PROFILE);

    if (loading || !data) return null;
    if (error) return <p>There was an error: {error}</p>;

    return (
        <div className="flex flex-col justify-center items-center mt-32">
            <div className='flex flex-col justify-center items-center w-full h-1/2'>
                {data?.user?.id && <QRCode renderAs='svg' size={250} value={[...data.user.id].reverse().join('')} />}
            </div>
            <p className='text-xl w-3/4 text-center border-b-4 mt-10 pb-6 mx-2'>Scan QR code to swaap information </p>
            <div className='mt-16 flex justify-center'>
                <button className='flex flex-col items-center' onClick={() => navigate('scanqr')}>
                    <svg width="32" height="32" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.2539 2.8125H16.0664L15.307 0.684375C15.2546 0.538753 15.1584 0.412879 15.0317 0.323947C14.9051 0.235016 14.754 0.187363 14.5992 0.1875H7.40859C7.09219 0.1875 6.80859 0.386719 6.70312 0.684375L5.94141 2.8125H2.75391C1.71797 2.8125 0.878906 3.65156 0.878906 4.6875V15.375C0.878906 16.4109 1.71797 17.25 2.75391 17.25H19.2539C20.2898 17.25 21.1289 16.4109 21.1289 15.375V4.6875C21.1289 3.65156 20.2898 2.8125 19.2539 2.8125ZM19.4414 15.375C19.4414 15.4781 19.357 15.5625 19.2539 15.5625H2.75391C2.65078 15.5625 2.56641 15.4781 2.56641 15.375V4.6875C2.56641 4.58438 2.65078 4.5 2.75391 4.5H7.12969L7.53047 3.37969L8.06719 1.875H13.9383L14.475 3.37969L14.8758 4.5H19.2539C19.357 4.5 19.4414 4.58438 19.4414 4.6875V15.375ZM11.0039 6C8.93203 6 7.25391 7.67812 7.25391 9.75C7.25391 11.8219 8.93203 13.5 11.0039 13.5C13.0758 13.5 14.7539 11.8219 14.7539 9.75C14.7539 7.67812 13.0758 6 11.0039 6ZM11.0039 12C9.76172 12 8.75391 10.9922 8.75391 9.75C8.75391 8.50781 9.76172 7.5 11.0039 7.5C12.2461 7.5 13.2539 8.50781 13.2539 9.75C13.2539 10.9922 12.2461 12 11.0039 12Z" fill="#1A202C"/>
                    </svg>
                    <p className='text-md mt-2'>Scan</p>
                </button>
            </div>
        </div>
    )
}

export default ReadQr;