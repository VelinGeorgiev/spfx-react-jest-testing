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

  it('should has test title is the props', () => {

    expect(reactComponent.props().strings.TitleLabel).toBe("PnP Ice Cream Shop");
  });

  it('should has initial state', () => {

    const state = reactComponent.state();
    
    expect(state.hasBoughtIceCream).toBe(false);
    //expect(state.iceCreamFlavoursList.length).toBe(0);
    expect(state.quantity).toBe(1);
    expect(state.selectedIceCream).toBe(null);
  });

  it('should buy form be hidden', () => {

    const buyForm = reactComponent.find("#buyForm");

    expect(buyForm.length).toBe(0);
  });

  it('should unhide the buy form after ice cream has been selected', (done) => {

    setTimeout(_ => {

      const selectButton = reactComponent.find('[data-automationid="listItem"]').first();
      
      selectButton.simulate('click');

      const buyForm = reactComponent.find("#buyForm");
      
      expect(buyForm.length).toBeGreaterThan(0);

      done();

    }, 10);
  });
});
