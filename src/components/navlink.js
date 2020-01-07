import React from 'react';
import { Link } from '@reach/router';

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return (
        isCurrent && {
          style: {
            borderBottom: '5px solid #007AFF ',
            paddingBottom: '30px'
          }
        }
      );
    }}
  />
);

export default NavLink;
