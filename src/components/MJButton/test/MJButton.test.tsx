import * as React from 'react';
import { MJButton } from '../MJButton';
import { MJButtonProps } from '../MJButton.types';
import { renderWithTheme } from 'testUtils/renderWithTheme';

const testId = 'Button';

describe('Button Component', () => {
    it('should render Button Component correctly', () => {
        const props = getBaseProps();
        const { findByTestId } = renderWithTheme(<MJButton {...props} data-testid={testId}>button</MJButton>);
        const button = findByTestId(testId);
        expect(button).toBeInTheDocument();
    });
});