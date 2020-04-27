import React, { useState } from 'react';
import ClipboardJS from 'clipboard';

// Component Start
export default function ProfileLink(props) {
  const { qrPubLink } = props;

  const [copySuccess, setCopySuccess] = useState('');
  const [copyFailed, setCopyFailed] = useState('');

  var clipboard = new ClipboardJS('.btn');

  clipboard.on('success', function (e) {
    setCopySuccess(alert('Link Copied to Your Clipboard!'));

    // let timeId = setInterval(, 3000);
    // setTimeout(() => { clearInterval(timeId) }, 3000)

    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);
    console.log(e);

    e.clearSelection();
  });

  clipboard.on('error', function (e) {
    setCopyFailed('Copied Unsuccessful!');
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
  });

  return (
    <div>
      <div className="mobile:hidden">
        <button class="btn" data-clipboard-text={qrPubLink}>
          click to copy profile link
        </button>
        {/* <div className="desktop:text-green-800 text-sm">
            {copySuccess}
            </div> */}
      </div>
      <div className="desktop:hidden">
        {/* <div classname="mobile:mt-1 mobile:text-green-600 ">
            {copySuccess}
          </div> */}
        <div classname="">
          <button class="btn" data-clipboard-text={qrPubLink}>
            Share Link
          </button>
        </div>
      </div>
    </div>
  );
}
