import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { Checkbox } from '.';
describe('Input of type Checkbox', () => {
  it('Initialy, the input should be enabled', () => {
    render(<Checkbox />);
    const checkBoxInput = screen.getByRole('checkbox');
    expect(checkBoxInput).toBeEnabled();
  });
  it('The input should be disabled if disabled props is true', () => {
    render(<Checkbox disabled />);
    const checkBoxInput = screen.getByRole('checkbox');
    expect(checkBoxInput).toBeDisabled();
  });

  it('Input should be checked upon click', () => {
    render(<Checkbox />);
    const checkBoxInput = screen.getByRole('checkbox');
    fireEvent.click(checkBoxInput);
    expect(checkBoxInput).toBeChecked();
  });

  it('Input should be rendered with label', () => {
    const { getByText } = render(<Checkbox label="primary" />);
    expect(getByText('primary')).toBeInTheDocument();
  });
  it('Both check and uncheck functionality should work', () => {
    const { getByRole } = render(<Checkbox label="secondary" />);
    const input = getByRole('checkbox');
    expect(input).toBeInTheDocument();
    expect(input).not.toBeChecked();
    fireEvent.click(input);
    expect(input).toBeChecked();
    fireEvent.click(input);
    expect(input).not.toBeChecked();
  });
});
