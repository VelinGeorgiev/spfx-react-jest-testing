/// <reference types="jest" />
/// <reference types="enzyme" />

import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-15';

Enzyme.configure({ adapter: new Adapter() });

import IceCreamShop from '../components/IceCreamShop';
import { IceCreamFakeProvider } from '../iceCreamProviders/IceCreamFakeProvider';

let reactComponent: Enzyme.ReactWrapper;

beforeEach(() => {

  reactComponent = Enzyme.mount(React.createElement(
    IceCreamShop,
    {
      title: "Test title",
      iceCreamProvider: new IceCreamFakeProvider(),
    }
  ));
});

it('should root web part element exists', () => {

  // Define the css selector.
  let cssSelector: string = '#iceCreamComponent';

  // Find the elemet using css selector.
  const element = reactComponent.find(cssSelector);

  expect(element.length).toBeGreaterThan(0);
});

it('should has the correct title', () => {

  // Define the css selector.
  let cssSelector: string = '.ms-font-xl .ms-fontColor-white';

  // Find the elemet using css selector.
  const text = reactComponent.find(cssSelector).text();

  expect(text).toBe("Test title");
});

// Usefull links:
// https://reactjs.org/docs/test-renderer.html
// https://github.com/airbnb/enzyme
