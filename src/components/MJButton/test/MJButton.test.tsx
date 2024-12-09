import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MJButton from '../MJButton';
import { MJButtonProps } from '../MJButton.types';
import { renderWithTheme } from './../../../testUtils/renderWithTheme';
import '@testing-library/jest-dom';

const testId = 'Button';

describe('Button Component', () => {
    it('should render Button Component correctly', () => {
        render(<MJButton data-testid={testId}>button</MJButton>);
        expect(screen.getByText('button')).toBeVisible();
    });

    /*it('should click on event ', () => {
        const event = jest.fn();
        const wrapper = render(<MJButton data-testid={testId} onClick={event}>button</MJButton>);
        const button = wrapper.container.querySelector('button') as HTMLButtonElement;
        fireEvent.click(button);
        expect(event).toBeCalled();
        expect(event).toHaveBeenCalledTimes(1);
    })*/
});