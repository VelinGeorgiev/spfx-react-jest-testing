/// <reference types="jest" />
/// <reference types="enzyme" />
import * as React from 'react';
//import { assert, expect } from 'chai';
//import * as renderer from 'react-test-renderer';

import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-15';

Enzyme.configure({ adapter: new Adapter() });

import ReactJest from '../components/ReactJest';

it('adds 1 + 2 to equal 3 in TScript', ()=> {

    const reactComponent = Enzyme.mount(React.createElement(
        ReactJest,
        {
          description: "desc1"
        }
      ));
    // const sum = require('../sum.ts');
    // expect(sum(1, 2)).toBe(3);
    //const component = renderer.create(<ReactJest description='desc' />);
    //let tree = component.toJSON();
    //console.log(tree);

    // Define the css selector.
    let cssSelector: string = '#iceCreamComponent';
        
    // Find the elemet using css selector.
    const element = reactComponent.find(cssSelector);
    
    console.log(reactComponent.props().description);
    console.log(element.length);
    expect(element.length).toBeGreaterThan(0);
});