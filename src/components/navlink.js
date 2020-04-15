import React from 'react';
import { Link } from '@reach/router';

const NavLink = (props) => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return isCurrent
        ? {
            style: {
              background: 'whiteSmoke',
              borderRadius: '5px',
              display: 'flex',
              padding: '1rem 1rem 1rem 0rem',
              width: 'auto',
            },
          }
        : {
            style: {
              background: 'white',
              borderRadius: '0px',
              display: 'flex',
              padding: '1rem 1rem 1rem 0rem',
            },
          };
    }}
  />
);

export default NavLink;
