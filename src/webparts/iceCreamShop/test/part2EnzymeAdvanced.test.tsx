/// <reference types="jest" />
/// <reference types="enzyme" />

import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-15';
import { IIceCreamShopProps } from '../components/IIceCreamShopProps';
import { IIceCreamShopState } from '../components/IIceCreamShopState';
import IceCreamShop from '../components/IceCreamShop';
import { IceCreamFakeProvider } from '../iceCreamProviders/IceCreamFakeProvider';

Enzyme.configure({ adapter: new Adapter() });

describe('Enzyme advanced', () => {

  let reactComponent: Enzyme.ReactWrapper<IIceCreamShopProps, IIceCreamShopState>;

  beforeEach(() => {

    reactComponent = Enzyme.mount(React.createElement(
      IceCreamShop,
      {
        title: "Test title",
        iceCreamProvider: new IceCreamFakeProvider(),
      }
    ));
  });

  it('should has test title is the props', () => {

    expect(reactComponent.props().title).toBe("Test title");
  });

  it('should has initial state', () => {

    const state = reactComponent.state();
    
    expect(state.hasBoughtIceCream).toBe(false);
    expect(state.iceCreamFlavoursList.length).toBe(0);
    expect(state.quantity).toBe(1);
    expect(state.selectedIceCream).toBe(null);
  });

  it('should buy form be hidden', () => {

    const buyForm = reactComponent.find("#buyForm");

    expect(buyForm.length).toBe(0);
  });

  it('should select button unhide the buy form', (done) => {

    setTimeout(_ => {

      const selectButton = reactComponent.find("#iceCreamFlavoursList button").first();
      
      selectButton.simulate('click');

      const buyForm = reactComponent.find("#buyForm");
      
      expect(buyForm.length).toBeGreaterThan(0);

      done();

    }, 10);
  });
});
