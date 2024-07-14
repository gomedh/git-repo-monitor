import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../components/HomeScreen';
import { HOME_SCREEN_TITLE, OPEN_MODAL_BUTTON } from '../utils/constants';

describe('Home Component', () => {
    test('renders Home component', () => {
      render(<Home />);
      const headingElement = screen.getByText(HOME_SCREEN_TITLE);
      expect(headingElement).toBeInTheDocument();
    });
  
    test('renders heading', () => {
      render(<Home />);
      const headingElement = screen.getByText(HOME_SCREEN_TITLE);
      expect(headingElement).toBeInTheDocument();
    });
  
    test('renders button to open modal', () => {
      render(<Home />);
      const buttonElement = screen.getByText(OPEN_MODAL_BUTTON);
      expect(buttonElement).toBeInTheDocument();
    });
  });
