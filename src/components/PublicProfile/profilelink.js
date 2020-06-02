import React, { useState, useEffect } from 'react';
import ClipboardJS from 'clipboard';
import Popup from 'reactjs-popup';
import {useQuery} from '@apollo/react-hooks';
import {NAVBAR_PROFILE} from "../../queries/index"
import { fieldsConflictMessage } from 'graphql/validation/rules/OverlappingFieldsCanBeMerged';

// Component Start
export default function ProfileLink(props) {
    const {qrPubLink } = props;
    
    const [copySuccess, setCopySuccess] = useState('');

    // useEffect(() => {
    //   setCopySuccess('')
    // }, []);

    var clipboard = new ClipboardJS('.btn');
    
    clipboard.on('success', function(e) {
        // let timeId = setInterval(3000);
        // setTimeout(() => { clearInterval(timeId) }, 1000)   
    
        // console.info('Action:', e.action);
        // console.info('Text:', e.text);
        // console.info('Trigger:', e.trigger);
        // console.log(e);

        e.clearSelection();
    });

    //GraphQL Queries
    const {data} = useQuery(NAVBAR_PROFILE);

    return (
        <div>
          <div className="mobile:hidden">
          <Popup trigger={ <button class="btn" data-clipboard-text={qrPubLink}>
            <a classname="text-blue-500">click to copy profile link</a>
              </button>} 
              modal
              position="center center">
                {(close) => (
                  <div>
                    <br />
                    <div classname="">Link Copied to Your Clipboard!</div>
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
            <Popup trigger={ <button class="btn" data-clipboard-text={qrPubLink}>
                  Share Link
              </button>} 
              modal
              position="center center">
                {(close) => (
                  <div classname="text-center mt-8 text-blue-500">
                    <br />
                    <div classname="">Link Copied to Your Clipboard!</div>
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