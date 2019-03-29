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

});
