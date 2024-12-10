import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MJButton from '../MJButton';
import { MJButtonProps } from '../MJButton.types';
import { renderWithTheme } from './../../../testUtils/renderWithTheme';
import { clickHandler } from '../MJButton.logic';
import '@testing-library/jest-dom';

const testId = 'Button';

describe('Button Component', () => {
    it('should render Button Component correctly', () => {
        render(<MJButton data-testid={testId}>button</MJButton>);
        expect(screen.getByText('button')).toBeVisible();
    });

    it('should render disabled ', () => {
        render(<MJButton data-testid={testId} disabled={true}>button</MJButton>);
        const button = screen.getByRole('button');
        expect(button).toBeDisabled();
    });
});