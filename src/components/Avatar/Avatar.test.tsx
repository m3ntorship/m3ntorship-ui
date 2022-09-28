import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import { Avatar } from './';

describe('Avatar component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Avatar />);
    const avatarText = getByText('A');
    expect(avatarText).toBeInTheDocument();
  });

  it('renders an img when given a valid src', () => {
    const { getByRole } = render(
      <Avatar src="https://picsum.photos/50/50/" alt="avatar image" />
    );
    const avatarImage = getByRole('img');
    expect(avatarImage).toBeInTheDocument();
  });

  it('renders chidlren when given an invalid src', () => {
    const { getByText, getByRole } = render(
      <Avatar src="https://picsum.photoss/50/50/" alt="avatar image">
        B
      </Avatar>
    );
    const avatarImage = getByRole('img');
    expect(avatarImage).toBeInTheDocument();

    fireEvent.error(avatarImage);
    expect(avatarImage).not.toBeInTheDocument();

    const avatarText = getByText('B');
    expect(avatarText).toBeInTheDocument();
  });

  it('renders a p with first letter of alt when given invalid src and no children', () => {
    const { getByText, getByRole } = render(
      <Avatar src="https://picsum.photoss/50/50/" alt="avatar image" />
    );

    const avatarImage = getByRole('img');
    expect(avatarImage).toBeInTheDocument();

    fireEvent.error(avatarImage);
    expect(avatarImage).not.toBeInTheDocument();

    const avatarText = getByText('a');
    expect(avatarText).toBeInTheDocument();
  });

  it('renders a p with A when given invalid src and no children or alt', () => {
    const { getByText, getByRole } = render(
      <Avatar src="https://picsum.photoss/50/50/" />
    );

    const avatarImage = getByRole('img');
    expect(avatarImage).toBeInTheDocument();

    fireEvent.error(avatarImage);
    expect(avatarImage).not.toBeInTheDocument();
    const avatarText = getByText('A');
    expect(avatarText).toBeInTheDocument();
  });
});
