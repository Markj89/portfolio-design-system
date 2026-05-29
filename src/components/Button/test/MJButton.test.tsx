import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MJButton from '../Button';

describe('Button Component', () => {
    test('should render Button Component correctly', () => {
        const testId = 'Button';
        render(<MJButton data-testid={testId}>Click Me</MJButton>);
        expect(screen.getByText(/click me/i)).toBeVisible();
        expect(screen.getByText(/click me/i)).toBeInTheDocument();    
    });

    test('handles onClick event properly', () => {
        const handleClick = jest.fn();
        render(<MJButton onClick={handleClick}>Click me</MJButton>);
    
        const buttonElement = screen.getByRole('button', { name: 'Click me' });
        fireEvent.click(buttonElement);
        
        // expect(handleClick).toHaveBeenCalled();
        expect(handleClick).toHaveBeenCalledTimes(1);
  });
});