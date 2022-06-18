import React from 'react';
import * as renderer from 'react-test-renderer';
import { Typography } from './Typography';

describe('Typography', () => {
  it('Should render h1', () => {
    const tree = renderer.create(
      <Typography variant="h1">Lorem ipsum dolor sit amet.</Typography>
    );
    expect(tree).toMatchSnapshot();
  });
  it('Should render h2', () => {
    const tree = renderer.create(
      <Typography variant="h2">Lorem ipsum dolor sit amet.</Typography>
    );
    expect(tree).toMatchSnapshot();
  });
  it('Should render h3', () => {
    const tree = renderer.create(
      <Typography variant="h3">Lorem ipsum dolor sit amet.</Typography>
    );
    expect(tree).toMatchSnapshot();
  });
  it('Should render h4', () => {
    const tree = renderer.create(
      <Typography variant="h4">Lorem ipsum dolor sit amet.</Typography>
    );
    expect(tree).toMatchSnapshot();
  });
  it('Should render h5', () => {
    const tree = renderer.create(
      <Typography variant="h5">Lorem ipsum dolor sit amet.</Typography>
    );
    expect(tree).toMatchSnapshot();
  });
  it('Should render h6', () => {
    const tree = renderer.create(
      <Typography variant="h6">Lorem ipsum dolor sit amet.</Typography>
    );
    expect(tree).toMatchSnapshot();
  });
  it('Should render hero', () => {
    const tree = renderer.create(
      <Typography variant="hero">Lorem ipsum dolor sit amet.</Typography>
    );
    expect(tree).toMatchSnapshot();
  });
  it('Should render body1', () => {
    const tree = renderer.create(
      <Typography variant="body1">Lorem ipsum dolor sit amet.</Typography>
    );
    expect(tree).toMatchSnapshot();
  });
  it('Should render body2', () => {
    const tree = renderer.create(
      <Typography variant="body2">Lorem ipsum dolor sit amet.</Typography>
    );
    expect(tree).toMatchSnapshot();
  });
  it('Should render subtitle', () => {
    const tree = renderer.create(
      <Typography variant="subtitle">Lorem ipsum dolor sit amet.</Typography>
    );
    expect(tree).toMatchSnapshot();
  });
  it('Should render caption', () => {
    const tree = renderer.create(
      <Typography variant="caption">Lorem ipsum dolor sit amet.</Typography>
    );
    expect(tree).toMatchSnapshot();
  });
  it('Should render disclaimer', () => {
    const tree = renderer.create(
      <Typography variant="disclaimer">Lorem ipsum dolor sit amet.</Typography>
    );
    expect(tree).toMatchSnapshot();
  });
});
