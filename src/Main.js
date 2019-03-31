import React from 'react';
import PropTypes from 'prop-types';
import { titleStyle, subtitleStyle, headerStyle, containerStyle, videoStyle } from './Styles'


const defaultProps = {
  bgColor: '#ccc',
  bgImg: '',
  font: 'sans-serif',
  textColor: '#fff',
};

const FullHeader = ({ title, subtitle, bgColor, textColor, font, bgImg, video }) => {
  const headerStylesCombined = {
    ...headerStyle,
    backgroundColor: bgColor,
    backgroundImage: `url(${bgImg})`,
    color: textColor,
    fontFamily: font,
  }

  const component = (
    <header style={headerStylesCombined}>
      <div style={containerStyle}>
        {title && <h1 style={titleStyle}>{title}</h1>}
        {subtitle && <h2 style={subtitleStyle}>{subtitle}</h2>}
      </div>
      {video && <video style={videoStyle} autoPlay muted loop src={video} />}
    </header>
  );

  return component;
};

const proptypes = {
  bgColor: PropTypes.string,
  bgImg: PropTypes.string,
  font: PropTypes.string,
  subtitle: PropTypes.string,
  textColor: PropTypes.string,
  title: PropTypes.string,
  video: PropTypes.string
};

FullHeader.proptypes = proptypes;
FullHeader.defaultProps = defaultProps;

export default FullHeader;
