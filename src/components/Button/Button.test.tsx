import React from 'react';
import * as renderer from 'react-test-renderer';

import { Button } from './index';

describe('Button', () => {
  it('should render button component with {Default inner text, and className = {shared variant-filled-shared size-large variant-filled-primary}}', () => {
    const tree = renderer.create(<Button />);
    expect(tree).toMatchSnapshot();
  });
  it('should return ghost disabled button', () => {
    const tree = renderer.create(
      <Button content="secondary disabled" variant="ghost" disabled={true} />
    );
    expect(tree).toMatchSnapshot();
  });
});
