import React from 'react';
import * as renderer from 'react-test-renderer';

import { Badge } from '.';

describe('Badge component', () => {
  it("should render empty badge label with primary background color when we don't pass any props", () => {
    const tree = renderer.create(<Badge />);
    expect(tree).toMatchSnapshot();
  });

  it('should render Badge component with text when we pass children', () => {
    const tree = renderer.create(<Badge>Simple badge</Badge>);
    expect(tree).toMatchSnapshot();
  });

  it('should render Badge component with text and Secondary background color when we pass children and color props', () => {
    const tree = renderer.create(<Badge color="secondary">Simple badge</Badge>);
    expect(tree).toMatchSnapshot();
  });

  it('should render Badge component with capitalized first letter', () => {
    const tree = renderer.create(<Badge>simple badge</Badge>);
    expect(tree).toMatchSnapshot();
  });
});
