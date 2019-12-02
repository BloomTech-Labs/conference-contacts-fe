import React from 'react';
import { Link } from '@reach/router';

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        style: {
          borderBottom: isCurrent && '5px solid #007AFF',
          paddingBottom: isCurrent && '30px'
        }
      };
    }}
  />
);

export default NavLink;