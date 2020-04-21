import React from 'react';
import { IconContext } from 'react-icons';
import { FaCheck } from 'react-icons/fa';
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
  AiFillUnlock,
} from 'react-icons/ai';
import { FiPhoneOutgoing } from 'react-icons/fi';
import { IoIosText } from 'react-icons/io';

const SVGIcon = React.memo(({ id, type, classes, divClass, onClick, size }) => (
  //You can control the styling of the icons via classes or size or both.
  //IconContext.Provider allows you to override styles as needed see for more info:
  //https://www.npmjs.com/package/react-icons
  //Component is set up to be flexible to your needs. If you use size for the icon
  //do not make a css class to do so, unless you are looking to control the sizing of the parent div.

  <div className={divClass} id={id} onClick={onClick}>
    {type === 'EMAIL' ? (
      <IconContext.Provider value={{ className: classes, size: size }}>
        <AiOutlineMail className={classes} />
      </IconContext.Provider>
    ) : type === 'INSTAGRAM' ? (
      <IconContext.Provider value={{ className: classes, size: size }}>
        <AiOutlineInstagram />
      </IconContext.Provider>
    ) : type === 'FACEBOOK' ? (
      <IconContext.Provider value={{ className: classes, size: size }}>
        <AiOutlineFacebook className={classes} />
      </IconContext.Provider>
    ) : type === 'LINKEDIN' ? (
      <IconContext.Provider value={{ className: classes, size: size }}>
        <AiOutlineLinkedin className={classes} />
      </IconContext.Provider>
    ) : type === 'TWITTER' ? (
      <IconContext.Provider value={{ className: classes, size: size }}>
        <AiOutlineTwitter className={classes} />
      </IconContext.Provider>
    ) : type === 'PHONE' ? (
      <IconContext.Provider value={{ className: classes, size: size }}>
        <FiPhoneOutgoing className={classes} />
      </IconContext.Provider>
    ) : type === 'SMS' ? (
      <IconContext.Provider value={{ className: classes, size: size }}>
        <IoIosText className={classes} />
      </IconContext.Provider>
    ) : type === 'CHECK' ? (
      <IconContext.Provider value={{ className: classes, size: size }}>
        <FaCheck className={classes} />
      </IconContext.Provider>
    ) : type === 'MINUS-CIRCLE' ? (
      <IconContext.Provider value={{ className: classes, size: size }}>
        <AiOutlineMinusCircle className={classes} />
      </IconContext.Provider>
    ) : type === 'STAR' ? (
      <IconContext.Provider value={{ className: classes, size: size }}>
        <AiOutlineStar className={classes} />
      </IconContext.Provider>
    ) : type === 'SELECTEDSTAR' ? (
      <IconContext.Provider value={{ className: classes, size: size }}>
        <AiFillStar className={classes} />
      </IconContext.Provider>
    ) : type === 'LOCK' ? (
      <IconContext.Provider value={{ className: classes, size: size }}>
        <AiFillLock className={classes} />
      </IconContext.Provider>
    ) : type === 'UNLOCK' ? (
      <IconContext.Provider value={{ className: classes, size: size }}>
        <AiFillUnlock className={classes} />
      </IconContext.Provider>
    ) : null}
  </div>
));

export default SVGIcon;
