import React from 'react';
import FullHeader from '../src/Main'; // This is our component
import { storiesOf } from '@storybook/react';

storiesOf('React Full Header', module)
  .add('With title', () => {
    <FullHeader title="JS com TDD" />
  })
  .add('With title and subtitle', () => {
    <FullHeader 
      title="JS com TDD"
      subtitle="what is tested may never break"
    />
  })
  .add('With title, subtitle and bgColor', () => {
    <FullHeader 
      title="JS com TDD"
      subtitle="what is tested may never break"
      bgColor="3299BB"
    />
  })
  .add('With title, subtitle, bgColor and textColor', () => {
    <FullHeader 
      title="JS com TDD"
      subtitle="what is tested may never break"
      bgColor="3299BB"
      textColor="#FF9900"
    />
  })
  .add('With title, subtitle, bgColor, textColor and font', () => {
    <FullHeader 
      title="JS com TDD"
      subtitle="what is tested may never break"
      bgColor="3299BB"
      textColor="#FF9900"
      font="cursive"
    />
  })
  .add('With title, subtitle, bgImg', () => {
    <FullHeader 
      title="JS com TDD"
      subtitle="what is tested may never break"
      bgImg="https://raw.githubusercontent.com/willianjusten/photo-examples/master/iceland-glacier.jpg"
    />
  })
  .add('with title, subtitle and video', () => (
    <FullHeader
      title="JS com TDD"
      subtitle="what is tested may never break"
      bgColor="#EBE9EB"
      textColor="#3299BB"
      video="http://callmenick.com/_development/video/full-screen-background-video/media/demo.mp4"
    />
  ));