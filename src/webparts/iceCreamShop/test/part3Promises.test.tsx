/// <reference types="jest" />
/// <reference types="enzyme" />

import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-15';
import { IIceCreamShopProps } from '../components/IIceCreamShopProps';
import { IIceCreamShopState } from '../components/IIceCreamShopState';
import IceCreamShop from '../components/IceCreamShop';
import { IceCreamFakeProvider } from '../iceCreamProviders/IceCreamFakeProvider';

describe('Promises basics', () => {

  let reactComponent: Enzyme.ReactWrapper<IIceCreamShopProps, IIceCreamShopState>;

  beforeEach(() => {

    reactComponent = Enzyme.mount(React.createElement(
      IceCreamShop,
      {
        title: "Test title",
        iceCreamProvider: new IceCreamFakeProvider()
      }
    ));
  });

  it('should show a list of ice cream flavours', (done) => {

    setTimeout(_ => {

      const componentAsDOM = reactComponent.getDOMNode();
      const flavours = componentAsDOM.querySelectorAll("[class*='flavourLabel']");

      expect(flavours[0].textContent).toBe(" Chocolate");
      expect(flavours[1].textContent).toBe(" Coffee and Cookie");
      expect(flavours[2].textContent).toBe(" Vanilla");

      done();

    }, 10);
  });

  it('should state of iceCreamFlavoursList changed', (done) => {
    
      setTimeout(_ => {
  
        const flavoursState = reactComponent.state().iceCreamFlavoursList;
  
        expect(flavoursState.length).toBe(4);
  
        done();
  
      }, 10);
    });
});
