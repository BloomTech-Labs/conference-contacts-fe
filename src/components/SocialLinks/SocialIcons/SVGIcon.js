import React from 'react';
import {FaCheck } from 'react-icons/fa';
import {
  AiOutlineMail, 
  AiOutlineFacebook, 
  AiOutlineTwitter, 
  AiOutlineLinkedin, 
  AiOutlineInstagram, 
  AiOutlineMinusCircle,
  AiOutlineStar,
  AiFillStar,
  AiFillLock,
  AiFillUnlock

} from 'react-icons/ai';


const SVGIcon = React.memo(({ id, type, classes, onClick, fill}) => (

  <div
    id={id}
    onClick={onClick}
  >
    {type === 'EMAIL' ? (
      
      <AiOutlineMail className={classes} />

    ) : type === 'INSTAGRAM' ? (

      <AiOutlineInstagram className={classes} />

    ) : type === 'FACEBOOK' ? (

      <AiOutlineFacebook className={classes} />
      
    ) : type === 'LINKEDIN' ? (

      <AiOutlineLinkedin className={classes} />

    ) : type === 'TWITTER' ? (

      <AiOutlineTwitter className={classes}/>

    ) : type === 'CHECK' ? (

        <FaCheck className={classes}/>

    ) : type === 'MORE' ? (
      <>
        <path
          d="M12 12.8571C12.4734 12.8571 12.8572 12.4734 12.8572 12C12.8572 11.5266 12.4734 11.1428 12 11.1428C11.5266 11.1428 11.1429 11.5266 11.1429 12C11.1429 12.4734 11.5266 12.8571 12 12.8571Z"
          stroke={fill || '#4A5568'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 12.8571C18.4734 12.8571 18.8572 12.4734 18.8572 12C18.8572 11.5266 18.4734 11.1428 18 11.1428C17.5266 11.1428 17.1429 11.5266 17.1429 12C17.1429 12.4734 17.5266 12.8571 18 12.8571Z"
          stroke={fill || '#4A5568'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.00003 12.8571C6.47341 12.8571 6.85717 12.4734 6.85717 12C6.85717 11.5266 6.47341 11.1428 6.00003 11.1428C5.52664 11.1428 5.14288 11.5266 5.14288 12C5.14288 12.4734 5.52664 12.8571 6.00003 12.8571Z"
          stroke={fill || '#4A5568'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ) : type === 'MINUS-CIRCLE' ? (

      <AiOutlineMinusCircle className={classes} />

    ) : type === 'STAR' ? (

      <AiOutlineStar className={classes} />
 
    ) : type === 'SELECTEDSTAR' ? (

      <AiFillStar className={classes} />
 
    ) : type === 'LOCK' ? (

      <AiFillLock className={classes} />
 
    ) : type === 'UNLOCK' ? (

      <AiFillUnlock className={classes} />
 
    ): null}
  </div>
));

export default SVGIcon;
