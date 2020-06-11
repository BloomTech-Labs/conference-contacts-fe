import React from 'react';
import ClipboardJS from 'clipboard';
import Popup from 'reactjs-popup';

// Component Start
export default function ProfileLink(props) {
    const {qrPubLink } = props;
    
    var clipboard = new ClipboardJS('.btn');
    
    clipboard.on('success', function(e) {
       e.clearSelection();
    });

    return (
        <div>
          <div className="mobile:hidden">
          <Popup trigger={ <button className="btn" data-clipboard-text={qrPubLink}>
            <a className="text-blue-500">click to copy profile link</a>
              </button>} 
              modal
              position="center center">
                {(close) => (
                  <div>
                    <br />
                    <div>Link Copied to Your Clipboard!</div>
                    <br />
                    <button
                    className="my-4 text-white bg-purple-600 hover:bg-purple-900 font-bold py-2 px-4 rounded"
                    onClick={() => {
                      close();
                    }}> Ok
                    </button>
                  </div>
                )}
              </Popup>
          </div>
          <div className="desktop:hidden">
            <Popup trigger={ <button className="btn" data-clipboard-text={qrPubLink}>
                  Share Link
              </button>} 
              modal
              position="center center">
                {(close) => (
                  <div className="text-center mt-8 text-blue-500">
                    <br />
                    <div>Link Copied to Your Clipboard!</div>
                    <br />
                    <button
                    className="my-4 text-white bg-purple-600 hover:bg-purple-900 font-bold py-2 px-4 rounded"
                    onClick={() => {
                      close();
                    }}> Ok
                    </button>
                  </div>
                )}
              </Popup>
          </div>
      </div>
    )
  }