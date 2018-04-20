import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import prefetchImages from 'prefetch-image';
import allImages from '../resources/data/images';
import speeches from '../resources/data/speeches.json';
import GameContent from '../components/GameContent/GameContent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GameContent />, div);
});

it('componentDidMount: should hide loader after preloading', () => {
    const wrapper = shallow(<GameContent />);
    expect(wrapper.instance().state.loaderVisible).toBe(true);
    prefetchImages(allImages)
        .then(() => {
            expect(wrapper.instance().state.loaderVisible).toBe(false);
        });
});

it('showNextSpeech: should switch currentSpeech to given ID', () => {
    const wrapper = shallow(<GameContent />);
    expect(wrapper.instance().state.currentSpeech.id).toBe(0);
    wrapper.instance().showNextSpeech(1);
    expect(wrapper.instance().state.currentSpeech.id).toBe(1);
    wrapper.instance().showNextSpeech(5);
    expect(wrapper.instance().state.currentSpeech.id).toBe(5);
    wrapper.instance().showNextSpeech(54);
    expect(wrapper.instance().state.currentSpeech.id).toBe(54);
});

it('showNextSpeech: should have the same id and nextId on last speech', () => {
    const wrapper = shallow(<GameContent />);
    expect(wrapper.instance().state.currentSpeech.id).toBe(0);
    wrapper.instance().showNextSpeech(speeches.length - 1);
    expect(wrapper.instance().state.currentSpeech.nextId).toEqual(wrapper.instance().state.currentSpeech.nextId);
});
