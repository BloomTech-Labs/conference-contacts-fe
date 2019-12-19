import React from "react";
import Popup from "reactjs-popup";
import QRCode from 'qrcode.react';
import { NAVBAR_PROFILE } from '../queries/index';
import { useQuery } from '@apollo/react-hooks';

const contentStyle = {
  width: '80%',
  height: '70%',
  borderRadius: '0.9rem',
}

const QrCodeGenerator = () => {
  const { loading, error, data } = useQuery(NAVBAR_PROFILE);

  if (loading || !data) return <div>Loading...</div>;
  if (error) return <p>There was an error: {error}</p>;
  
  return (
    <Popup 
      trigger={
        <button className="button focus:outline-none">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.25 0H2C0.89375 0 0 0.89375 0 2V21.25C0 21.525 0.225 21.75 0.5 21.75H21.25C21.525 21.75 21.75 21.525 21.75 21.25V0.5C21.75 0.225 21.525 0 21.25 0ZM17.75 17.75H4V4H17.75V17.75ZM9.125 13.125H12.625C12.9 13.125 13.125 12.9 13.125 12.625V9.125C13.125 8.85 12.9 8.625 12.625 8.625H9.125C8.85 8.625 8.625 8.85 8.625 9.125V12.625C8.625 12.9 8.85 13.125 9.125 13.125ZM21.25 26.25H0.5C0.225 26.25 0 26.475 0 26.75V46C0 47.1062 0.89375 48 2 48H21.25C21.525 48 21.75 47.775 21.75 47.5V26.75C21.75 26.475 21.525 26.25 21.25 26.25ZM17.75 44H4V30.25H17.75V44ZM9.125 39.375H12.625C12.9 39.375 13.125 39.15 13.125 38.875V35.375C13.125 35.1 12.9 34.875 12.625 34.875H9.125C8.85 34.875 8.625 35.1 8.625 35.375V38.875C8.625 39.15 8.85 39.375 9.125 39.375ZM46 0H26.75C26.475 0 26.25 0.225 26.25 0.5V21.25C26.25 21.525 26.475 21.75 26.75 21.75H47.5C47.775 21.75 48 21.525 48 21.25V2C48 0.89375 47.1062 0 46 0ZM44 17.75H30.25V4H44V17.75ZM35.375 13.125H38.875C39.15 13.125 39.375 12.9 39.375 12.625V9.125C39.375 8.85 39.15 8.625 38.875 8.625H35.375C35.1 8.625 34.875 8.85 34.875 9.125V12.625C34.875 12.9 35.1 13.125 35.375 13.125ZM47.5 26.25H44.5C44.225 26.25 44 26.475 44 26.75V35.125H39.125V26.75C39.125 26.475 38.9 26.25 38.625 26.25H26.75C26.475 26.25 26.25 26.475 26.25 26.75V47.5C26.25 47.775 26.475 48 26.75 48H29.75C30.025 48 30.25 47.775 30.25 47.5V32.25H35.125V38.625C35.125 38.9 35.35 39.125 35.625 39.125H47.5C47.775 39.125 48 38.9 48 38.625V26.75C48 26.475 47.775 26.25 47.5 26.25ZM38.625 44H35.625C35.35 44 35.125 44.225 35.125 44.5V47.5C35.125 47.775 35.35 48 35.625 48H38.625C38.9 48 39.125 47.775 39.125 47.5V44.5C39.125 44.225 38.9 44 38.625 44ZM47.5 44H44.5C44.225 44 44 44.225 44 44.5V47.5C44 47.775 44.225 48 44.5 48H47.5C47.775 48 48 47.775 48 47.5V44.5C48 44.225 47.775 44 47.5 44Z" fill="black"/>
          </svg>
        </button>
      } 
      modal
      contentStyle={contentStyle}
      >
        {close => (
          <div className=''>
            <div className='flex justify-end items-center mr-2 mt-2'>
              <button className="focus:outline-none p-2 bg-gray-300 rounded-full" onClick={close}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M17.9117 18.674C18.3022 19.0646 18.9354 19.0646 19.3259 18.674C19.7164 18.2835 19.7164 17.6503 19.3259 17.2598L13.6798 11.6138L19.6304 5.66316C20.021 5.27264 20.021 4.63947 19.6304 4.24895C19.2399 3.85842 18.6068 3.85842 18.2162 4.24895L12.2656 10.1996L6.31502 4.24895C5.92449 3.85842 5.29133 3.85842 4.9008 4.24895C4.51028 4.63947 4.51028 5.27264 4.9008 5.66316L10.8514 11.6138L5.20537 17.2598C4.81484 17.6503 4.81484 18.2835 5.20537 18.674C5.59589 19.0646 6.22906 19.0646 6.61958 18.674L12.2656 13.028L17.9117 18.674Z" fill="black"/>
                </svg>
              </button>
            </div>
            <div className='flex flex-col justify-center items-center w-3/4 m-auto'>
              <div className='flex justify-center align-center mt-16 mb-16'>
                {data?.user?.id && 
                  <QRCode includeMargin={false} level='Q' renderAs='svg' 
                  value={[...data.user.id].reverse().join('')} />
                }
              </div>
                <p className='text-xl text-center border-t-4 mt-6 pt-10 mx-2'>Scan QR code to swaap information </p>
            </div>
          </div>
        )}
    </Popup>
  )
};

export default QrCodeGenerator;