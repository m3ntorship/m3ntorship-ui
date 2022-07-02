import React from 'react';
import * as renderer from 'react-test-renderer';

import { Link } from '.';

describe('Link', () => {
  it('Should render Default Link', () => {
    const tree = renderer.create(
      <Link href="#">Lorem ipsum dolor sit amet.</Link>
    );
    expect(tree).toMatchSnapshot();
  });
  it('Should render Small Link', () => {
    const tree = renderer.create(
      <Link href="#" size="small">
        Lorem ipsum dolor sit amet.
      </Link>
    );
    expect(tree).toMatchSnapshot();
  });
  it('Should render Disabled Link', () => {
    const tree = renderer.create(
      <Link href="#" disabled>
        Lorem ipsum dolor sit amet.
      </Link>
    );
    expect(tree).toMatchSnapshot();
  });
  it('Should render Small Disabled Link', () => {
    const tree = renderer.create(
      <Link href="#" size="small" disabled>
        Lorem ipsum dolor sit amet.
      </Link>
    );
    expect(tree).toMatchSnapshot();
  });
});
