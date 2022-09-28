import { render, screen } from '@testing-library/react';
import React from 'react';

import { Badge } from '.';

describe('Badge component', () => {
  it("should render empty badge label with primary background color when we don't pass any props", () => {
    render(<Badge />);

    const badgeEl = screen.getByTestId('badge');

    expect(badgeEl).toBeEmptyDOMElement();
  });

  it('should render Badge component with text when we pass children', () => {
    render(<Badge>Simple badge</Badge>);

    const badgeEl = screen.getByTestId('badge');

    expect(badgeEl).toHaveTextContent('Simple badge');
  });

  it('should render Badge component with text and Secondary background color when we pass children and color props', () => {
    render(<Badge color="secondary">Simple badge</Badge>);

    const badgeEl = screen.getByTestId('badge');

    expect(badgeEl).toHaveClass('variant-secondary');
  });

  it('should render Badge component with capitalized first letter', () => {
    render(<Badge>simple badge</Badge>);

    const badgeEl = screen.getByTestId('badge');

    expect(badgeEl).toHaveTextContent('Simple badge');
  });
});
