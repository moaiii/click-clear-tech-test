import React from 'react';
import { render } from '@testing-library/react';
import Search from './Components/Search';

test('renders the search button', () => {
  const { getByText } = render(<Search setSearchedTracks={jest.fn()}/>);
  const searchButton = getByText(/Search/i);
  expect(searchButton).toBeInTheDocument();
});

// test onclick etc ...