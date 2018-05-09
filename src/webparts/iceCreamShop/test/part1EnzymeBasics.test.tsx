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
      iceCreamProvider: new IceCreamFakeProvider(),
      strings: {
        PropertyPaneDescription: "Description",
        BasicGroupName: "Group Name",
        DescriptionFieldLabel: "Description Field",
        TitleLabel: "PnP Ice Cream Shop",
        GetItLabel: "Get it for just ", 
        QuantityLabel: "Quantity",
        ForLabel: "for",
        BuyLabel: "Buy",
        SuccessLabel: "Success"
      } as IIceCreamShopWebPartStrings
    }
  ));
});

it('should root web part element exists', () => {

  // Define the css selector.
  let cssSelector: string = '#iceCreamShop';

  // Find the elemet using css selector.
  const element = reactComponent.find(cssSelector);

  expect(element.length).toBeGreaterThan(0);
});

it('should has the correct title', () => {

  // Define contains/like css selector
  let cssSelector: string = 'h1';

  // Find the elemet using css selector.
  const text = reactComponent.find(cssSelector).text();

  expect(text).toBe("PnP Ice Cream Shop");
});

// Usefull links:
// https://reactjs.org/docs/test-renderer.html
// https://github.com/airbnb/enzyme
