import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import FullHeader from '../../src/Main';

chai.use(chaiEnzyme());

describe('FullHeader ', () => {
  it('should have header tag when mount', () => {
    const component = shallow(<FullHeader />);
    expect(component.find('header')).to.have.length(1);
  });

  context('Title', () => {
    it('should have h1 tag when title is passed', () => {
      const component = shallow(<FullHeader title="JS com TDD" />);
      expect(component.find('h1')).to.have.length(1);
    });

    it('should not have h1 tag when title is not passed', () => {
      const component = shallow(<FullHeader />);
      expect(component.find('h1')).to.have.length(0);
    });

    it('should have h1 tag with title passed by props', () => {
      const component = shallow(<FullHeader title="JS com TDD" />);
      expect(component.find('h1').props().children).to.be.equal("JS com TDD");
    });
  });

  context('Subtitle', () => {
    it('should have h2 tag when subtitle is passed', () => {
      const component = shallow(<FullHeader subtitle="What is tested may never break" />);
      expect(component.find('h2')).to.have.length(1);
    });

    it('should not have h2 tag when subtitle is not passed', () => {
      const component = shallow(<FullHeader />);
      expect(component.find('h2')).to.have.length(0);
    });

    it('should have h2 tag with subtitle passed by props', () => {
      const component = shallow(<FullHeader subtitle="What is tested may never break" />);
      expect(component.find('h2').props().children).to.be.equal("What is tested may never break");
    });
  });

  context('bgColor', () => {
    it('should have background #ccc when none is passed', () => {
      const component = shallow(<FullHeader />);
     expect(component).to.have.style('background-color').equal('#ccc');
    });

    it('should have background #FFF when #FFF is passed', () => {
      const component = shallow(<FullHeader bgColor="#FFF" />);
     expect(component).to.have.style('background-color').equal('#FFF');
    });
  });

  context('textColor', () => {
    it('should have textColor #fff when none is passed', () => {
      const component = shallow(<FullHeader />);
      expect(component).to.have.style('color').equal('#fff');
    });

    it('should have textColor #FF0000 when #FFF is passed', () => {
      const component = shallow(<FullHeader textColor="#FF0000" />);
      expect(component).to.have.style('color').equal('#FF0000');
    });
  });

  context('Font', () => {
    it('should have font sans-serif when none is passed', () => {
      const component = shallow(<FullHeader />);
      expect(component).to.have.style('font-family').equal('sans-serif');
    });

    it('should have font Open Sans when font is passed', () => {
      const component = shallow(<FullHeader font="Open Sans" />);
      expect(component).to.have.style('font-family').equal('Open Sans');
    });
  });

  context('bgImage', () =>{
    it('should have background-image equals empty when none is passed', () => {
      const component = shallow(<FullHeader />);
      expect(component).to.have.style('background-image').equal('url()');
    });

    it('should have background-image equals bg.jpg when passed', () => {
      const component = shallow(<FullHeader bgImg="bg.jpg" />);
      expect(component).to.have.style('background-image').equal('url(bg.jpg)');
    });
  });

  context('Video', () => {
    it('should have video tag when video is passed', () => {
      const component = shallow(<FullHeader video="JS com TDD" />);
      expect(component.find('video')).to.have.length(1);
    });

    it('should not have video tag when video is not passed', () => {
      const component = shallow(<FullHeader />);
      expect(component.find('video')).to.have.length(0);
    });

    it('should have video tag with video passed by props', () => {
      const component = shallow(<FullHeader video="my_video.mp4" />);
      expect(component.find('video').props().src).to.be.equal("my_video.mp4");
    });
  });

});
