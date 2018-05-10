/// <reference types="jest" />

import * as React from 'react';
import { configure, mount, ReactWrapper } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-15';

import { IIceCreamShopProps } from '../components/IIceCreamShopProps';
import { IIceCreamShopState } from '../components/IIceCreamShopState';
import IceCreamShop from '../components/IceCreamShop';
import { IceCreamPnPJsProvider } from '../iceCreamProviders/IceCreamPnPJsProvider';
import { IceCream } from '../iceCreamProviders/IceCream';
import { sp } from "@pnp/sp";

import * as sinon from 'sinon';

configure({ adapter: new Adapter() });

describe('Sinon stubs', () => {

  let reactComponent: ReactWrapper<IIceCreamShopProps, IIceCreamShopState>;
  let iceCreamPnPJsProviderGetAllStub: sinon.SinonStub;
  let iceCreamPnPJsProviderBuyStub: sinon.SinonStub;

  beforeEach(() => {
    // set stubs on the pnp js provider so it does not call SharePoint at all
    iceCreamPnPJsProviderGetAllStub = sinon.stub(IceCreamPnPJsProvider.prototype, "getAll");
    iceCreamPnPJsProviderBuyStub = sinon.stub(IceCreamPnPJsProvider.prototype, "buy");
  });

  afterEach(() => {
    reactComponent.unmount();
    iceCreamPnPJsProviderGetAllStub.restore();
    iceCreamPnPJsProviderBuyStub.restore();
  });

  it('should show 3 ice cream flavours', (done) => {

    // mocks the promise and resolves it returnig
    // 3 items, no https call is made.
    iceCreamPnPJsProviderGetAllStub.resolves([
      { UniqueId: "GUID1", Title: "Cherry", Price: 1 },
      { UniqueId: "GUID2", Title: "Chocolate", Price: 2 },
      { UniqueId: "GUID3", Title: "Coffee and Cookie", Price: 3 }
    ] as IceCream[]);

    // mount the component
    // componentDidMount will be called 
    // and the component should recieve the data above 
    reactComponent = mount(React.createElement(
      IceCreamShop,
      {
        iceCreamProvider: new IceCreamPnPJsProvider(sp),
        strings: {} as IIceCreamShopWebPartStrings
      }
    ));

    reactComponent.instance().componentDidMount();

    // since the componentDidMount is a lifecicle event,
    // we do not know when the promise inside will resolve
    // this is why we have to add timeout and expect to be 
    // resolved after the timeout
    setTimeout(() => {
      // check if the state is populated with the data
      const items = reactComponent.state().iceCreamFlavoursList;

      expect(items.length).toBe(3);
      done();
    }, 100);
  });
});
// http://sinonjs.org/

