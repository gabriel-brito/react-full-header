import React from 'react';
import PropTypes from 'prop-types';

const defaultProps = {
  bgColor: '#ccc',
};

const FullHeader = ({ title, subtitle, bgColor }) => {
  const headerStyles = {
    backgroundColor: bgColor
  }

  const component = (
    <header style={headerStyles}>
      {title && <h1>{ title }</h1>}
      {subtitle && <h2>{ subtitle }</h2>}
    </header>
  );

  return component;
};

const proptypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

FullHeader.proptypes = proptypes;
FullHeader.defaultProps = defaultProps;

export default FullHeader;
