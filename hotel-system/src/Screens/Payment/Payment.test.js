import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Payment from './Payment';
import "@testing-library/jest-dom";
import { BrowserRouter } from 'react-router-dom';


describe('Payment page', () => {
    test('renders card type options', () => {
      render(
        <BrowserRouter>
          <Payment />
        </BrowserRouter>
      );
      const visaRadio = screen.getByLabelText('Visa');
      const mastercardRadio = screen.getByLabelText('Mastercard');
      expect(visaRadio).toBeInTheDocument();
      expect(mastercardRadio).toBeInTheDocument();
    });

  test('updates card type when radio button is clicked', () => {
    render(
        <BrowserRouter>
          <Payment />
        </BrowserRouter>
      );
    const mastercardRadio = screen.getByLabelText('Mastercard');
    fireEvent.click(mastercardRadio);
    expect(mastercardRadio).toBeChecked();
  });

  test('displays button for confirm payment', () => {
    render(
        <BrowserRouter>
          <Payment />
        </BrowserRouter>
      );
    const submitButton = screen.getByRole('button', { name: 'Confirm Payment' });
    fireEvent.click(submitButton);
    expect(submitButton).toBeInTheDocument();
  });

});
