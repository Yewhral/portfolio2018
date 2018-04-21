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
    const wrapperInstance = shallow(<GameContent />).instance();
    expect(wrapperInstance.state.loaderVisible).toBe(true);
    prefetchImages(allImages)
        .then(() => {
            expect(wrapperInstance.state.loaderVisible).toBe(false);
        });
});

it('showNextSpeech: should switch currentSpeech to given ID', () => {
    const wrapperInstance = shallow(<GameContent />).instance();
    expect(wrapperInstance.state.currentSpeech.id).toBe(0);
    wrapperInstance.showNextSpeech(1);
    expect(wrapperInstance.state.currentSpeech.id).toBe(1);
    wrapperInstance.showNextSpeech(5);
    expect(wrapperInstance.state.currentSpeech.id).toBe(5);
    wrapperInstance.showNextSpeech(54);
    expect(wrapperInstance.state.currentSpeech.id).toBe(54);
});

it('showNextSpeech: should have the same id and nextId on last speech', () => {
    const wrapperInstance = shallow(<GameContent />).instance();
    expect(wrapperInstance.state.currentSpeech.id).toBe(0);
    wrapperInstance.showNextSpeech(speeches.length - 1);
    expect(wrapperInstance.state.currentSpeech.nextId).toEqual(wrapperInstance.state.currentSpeech.nextId);
});
