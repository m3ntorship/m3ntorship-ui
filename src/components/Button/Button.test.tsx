import { render, screen } from '@testing-library/react';
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
      <Button variant="ghost" disabled={true}>
        Disabled Button
      </Button>
    );
    expect(tree).toMatchSnapshot();
  });

  it('should return Button with stront tag child', () => {
    const tree = renderer.create(
      <Button variant="ghost">
        <strong> This is Test </strong>
      </Button>
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render disabled Button with loading spinner and invisible text when we set loading to true', () => {
    render(<Button loading>button text</Button>);
    const tree = renderer.create(<Button loading>button text</Button>);

    const buttonEl = screen.getByTestId('button');

    expect(tree).toMatchSnapshot();
    expect(buttonEl).toBeDisabled();
  });
});
