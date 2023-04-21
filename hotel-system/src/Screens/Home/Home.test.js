import React from 'react';
import Home from './Home';
import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';

test('renders without crashing', () => {
  render(<Home/>);
  const textElem = screen.getByText('Grand Hotel');
  expect(textElem).toBeInTheDocument();
});

test('renders Nav component', () => {
    render(<Home />);
    const navElement = screen.getByRole('navigation');
    expect(navElement).toBeInTheDocument();
  });
  

  test('renders all room cards', () => {
    render(<Home />);
    const singleRoomCard = screen.getByText('Single Room');
    const executiveSuiteCard = screen.getByText('Executive Suite');
    const doubleRoomCard = screen.getByText('Double Room');
    expect(singleRoomCard).toBeInTheDocument();
    expect(executiveSuiteCard).toBeInTheDocument();
    expect(doubleRoomCard).toBeInTheDocument();
  });
  


