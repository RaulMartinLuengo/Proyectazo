import { useLocation, NavLink } from 'react-router-dom';
import React from 'react';

// eslint-disable-next-line import/prefer-default-export
// eslint-disable-next-line react/prop-types
// eslint-disable-next-line import/prefer-default-export
export function QueryNavLink({ to, ...props }) {
  const location = useLocation();
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <NavLink to={to + location.search} {...props} />;
}
