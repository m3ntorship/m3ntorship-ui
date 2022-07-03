import React from 'react';
import * as renderer from 'react-test-renderer';

import { Button } from './index';

describe('Button', () => {
  it('should render button component', () => {
    const tree = renderer.create(<Button />);
    expect(tree).toMatchSnapshot();
  });
});
