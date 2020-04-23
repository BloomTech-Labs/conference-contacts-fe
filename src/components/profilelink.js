import React, { useState } from 'react';
import ClipboardJS from 'clipboard';

// Component Start
export default function ProfileLink(props) {
  const {qrPubLink } = props;
  
  const [copySuccess, setCopySuccess] = useState('');
  const [copyFailed, setCopyFailed] = useState('');

  var clipboard = new ClipboardJS('.btn');
  console.log("clipboard", clipboard)
  
  clipboard.on('success', function(e) {
    setCopySuccess('Copied!');
      console.info('Action:', e.action);
      console.info('Text:', e.text);
      console.info('Trigger:', e.trigger);
  
      e.clearSelection();
  });
  
  clipboard.on('error', function(e) {
    setCopyFailed('Copied Unsuccessful!')
      console.error('Action:', e.action);
      console.error('Trigger:', e.trigger);
  });

  return (
    <div>
    <button class="btn" data-clipboard-text={qrPubLink}>
      click to copy profile link
    </button>
    <div className="text-green-800 text-sm">
      {copySuccess}
    </div>
  </div>
  )

}